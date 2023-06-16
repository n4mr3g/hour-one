import Ad from "../Ad/Ad";
import { Offer } from "../../dataTypes";
import { useState, useEffect } from "react";

export default function OffersList({ offers }: { offers: Offer[] }) {
  useEffect(() => {
    console.log("Offers: ", offers);
  }, [offers]);

  return (
    <>
      <div className="listing">
        {offers.map((offer) => (
          <Ad ad={offer} key={crypto.randomUUID()}></Ad>
        ))}
      </div>
    </>
  );
}
