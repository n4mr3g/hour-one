import { access } from "fs";

const SERVER_URL = "http://localhost:4000";

const apiServiceJWT = {};

//FIXME
//@ts-ignore
apiServiceJWT.signup = (user) => {
  return fetch(`${SERVER_URL}/signup`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//FIXME
//@ts-ignore
apiServiceJWT.login = (user) => {
  return fetch(`${SERVER_URL}/login`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiServiceJWT.profile = (accessToken) => {
  return fetch(`${SERVER_URL}/me`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiServiceJWT.logout = (tokenName) => {
  localStorage.removeItem(tokenName);
};

export default apiServiceJWT;
