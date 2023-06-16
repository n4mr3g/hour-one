import Navigation from "../Navigation/Navigation";
import "./signup.css";
import auth from "../../utils/auth";
import { signup, profile } from "../../api/apiServiceJWT";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions.js";
import { storeApp } from "../../store.js";

import findOffers from '../../App.jsx'

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.userInfo);
  const userInfo = storeApp.getState().userInfo;

  //FIXME
  //@ts-ignore
  async function handleSubmit(event) {
    event.preventDefault();
    if (!name || !email || !password) {
      alert("Please enter details correctly");
      return;
    }
    //FIXME
    //@ts-ignore
    const res = await signup({
      name,
      email,
      password,
    });
    if (res.error) {
      alert(res.data);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      const { accessToken } = res;
      localStorage.setItem("accessToken", accessToken);
      setName("");
      setEmail("");
      setPassword("");

      //function to make jwt profile call
      const getProfile = async (token: string) => {
        const prof = await profile(token);
        dispatch(loginAction(prof));
      };

      getProfile(accessToken);

      navigate("/app");
    }
  }
  return (
    <>
      <Navigation findOffers={findOffers} />
      <div className="form-container">
        <form className="form-itself" onSubmit={handleSubmit}>
          <div className="form--title"> Join Hour One </div>
          <div className="input-group">
            <label className="input-label" htmlFor="name">
              Fullname
            </label>
            <input
              className="input-box"
              type="text"
              name="name"
              value={name}
              placeholder="Please enter you fullname"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              className="input-box"
              type="text"
              name="name"
              value={email}
              placeholder="Enter a valid email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              className="input-box"
              type="password"
              name="name"
              value={password}
              placeholder="Length of minimum 8 characters"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button className="create-btn" type="submit">
            SignUp
          </button>
        </form>
      </div>
    </>
  );
}
