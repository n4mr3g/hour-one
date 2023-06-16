import "./App.css";
import Ad from "./components/Ad/Ad";
import Navigation from "./components/Navigation/Navigation";
import Filter from "./components/Filter/Filter";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { set, login } from "./actions.js";
// import apiServiceJWT from "./api/apiServiceJWT.jsx";
import { getOffersFromDB } from "./api/apiService.jsx";
import { Offer } from "./dataTypes.jsx";
// import { Offer } from "./dataTypes.tsx";

export default function App() {

  const [offers, setOffers] = useState<Offer[]>([]);

  // const dispatch = useDispatch();
  // const offersdb = useSelector<RootState, Offer[]>((state) => state.offers);
  // const offersdb = getOffersFromDB();
  // const [offers, setOffers] = useState(offersdb);

  function findOffers(query: string): void {
    const filteredResult = offers.filter((offer: Offer) =>
      offer.offer.toLowerCase().includes(query)
    );
    setOffers(filteredResult);
  }

  // const user = useSelector((state) => state.userInfo);

  useEffect(() => { getOffersFromDB() }, []);

  // const off = getOffersFromDB().then(offers => { return offers });
  // setOffers(off);


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
