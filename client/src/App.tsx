import "./App.css";
import Ad from "./components/Ad/Ad";
import Navigation from "./components/Navigation/Navigation";
import Filter from "./components/Filter/Filter";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { set, login } from "./actions.js";
import apiServiceJWT from "./api/apiServiceJWT.jsx";

export default function App() {
  const dispatch = useDispatch();
  const offersdb = useSelector((state) => state.offers);
  const [offers, setOffers] = useState(offersdb);
  console.log(offers);
  console.log(set);

  function findOffers(query) {
    const filteredResult = offers.filter((offer) =>
      offer.offer.toLowerCase().includes(query)
    );
    setOffers(filteredResult);
  }

  const user = useSelector((state) => state.userInfo);

  useEffect(() => {
    fetch("http://localhost:4000/offer")
      .then((response) => response.json())
      .then((data) => {
        dispatch(set(data.data));
        // TODO doing a hacky solution here
        // setOffers(data.data);
      });

    const accessToken = localStorage.getItem("accessToken");
    //function to make jwt profile call
    const getProfile = async (token) => {
      const profile = await apiServiceJWT.profile(token);
      console.log(profile);
      dispatch(login(profile));
    };

    getProfile(accessToken);
  }, []);
  return (
    <div>
      <Navigation findOffers={findOffers} />
      <div className="app-view">
        <Filter />
        <div className="listing">
          {offers.map((ad) => (
            <Ad ad={ad} key={crypto.randomUUID()}></Ad>
          ))}
        </div>
      </div>
    </div>
  );
}
