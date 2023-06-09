import "./App.css";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import Ad from "./components/Ad/Ad";
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
      <Hero></Hero>
      <div className="listing">
        {ads.map((ad) => (
          <Ad ad={ad}></Ad>
        ))}
      </div>
    </div>
  );
}
