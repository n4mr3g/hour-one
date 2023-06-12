import "./App.css";
import Ad from "./components/Ad/Ad";
import Navigation from "./components/Navigation/Navigation";
import Filter from "./components/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { set } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers);

  useEffect(() => {
    fetch("http://localhost:4000/offer")
      .then((response) => response.json())
      .then((data) => {
        dispatch(set(data.data));
      });
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
