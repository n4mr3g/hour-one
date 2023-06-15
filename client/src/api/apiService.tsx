import { useDispatch } from "react-redux";
import { set } from "../actions";
import { Offer } from "../dataTypes";
import apiServiceJWT from "./apiServiceJWT";

// const [offers, setOffers] = useState([]);

export async function postOffer(offer: Offer[]) {
  const res = await fetch("http://localhost:4000/offer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(offer),
  });
  const json = await res.json();
  return json;
}


export async function getOffersFromDB(): Promise<Offer[]> {

  // const dispatch = useDispatch();

  const response = await fetch("http://localhost:4000/offer", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  // dispatch(set(response.data));

  // const accessToken = localStorage.getItem("accessToken");

  // // function to make jwt profile call
  // const getProfile = async (token: string) => {
  //   const profile = await apiServiceJWT.profile(token);
  //   dispatch(login(profile));
  //   return profile;
  // };

  // getProfile(accessToken);

  return response.json();
};