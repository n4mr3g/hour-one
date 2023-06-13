import "./App.css";
import Ad from "./components/Ad/Ad";
import Navigation from "./components/Navigation/Navigation";
import Filter from "./components/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { set, login } from "./actions.js";
import apiServiceJWT from "./api/apiServiceJWT.jsx";

export default function App() {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers);
  const user = useSelector((state) => state.userInfo);
  console.log(user);

  useEffect(() => {
    fetch("http://localhost:4000/offer")
      .then((response) => response.json())
      .then((data) => {
        dispatch(set(data.data));
      });
    // TODO Need to make sure that old access token are refresh and deleted;
    const accessToken = localStorage.getItem("accessToken");

    //function to make jwt profile call
    const getProfile = async (token) => {
      const profile = await apiServiceJWT.profile(token);
      dispatch(login(profile));
    };

    getProfile(accessToken);
  }, []);
  return (
    <div>
      <Navigation />
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
