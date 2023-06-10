import "./App.css";

import { useEffect, useState } from "react";
import Ad from "./components/Ad/Ad";
import Navigation from "./components/Navigation/Navigation";
import Filter from "./components/Filter/Filter";
export default function App() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/explore")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setAds(data.data);
      });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="app-view">
        <Filter />
        <div className="listing">
          {ads.map((ad) => (
            <Ad ad={ad}></Ad>
          ))}
        </div>
      </div>
    </div>
  );
}
