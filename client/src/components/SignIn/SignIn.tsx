import Navigation from "../Navigation/Navigation";
import "./SignIn.css";
import auth from "../../utils/auth";
import apiServiceJWT from "../../api/apiServiceJWT";

import { useNavigate } from "react-router-dom";
import { login } from "../../actions.js";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  //FIXME
  //@ts-ignore
  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      alert("Please enter details correctly");
      return;
    }
    //FIXME
    //@ts-ignore
    const res = await apiServiceJWT.login({
      email,
      password,
    });
    if (res.error) {
      alert(res.data);
      setEmail("");
      setPassword("");
    } else {
      const { accessToken } = res;
      localStorage.setItem("accessToken", accessToken);
      setEmail("");
      setPassword("");

      const profile = await apiServiceJWT.profile(accessToken);
      dispatch(login(profile));

      navigate("/app");
    }
  }
  return (
    <>
      <Navigation />
      <div className="form-container">
        <form className="form-itself" onSubmit={handleSubmit}>
          <div className="form--title"> Log In </div>

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
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
