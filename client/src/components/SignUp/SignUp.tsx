import Navigation from "../Navigation/Navigation";
import "./signup.css";
import auth from "../../utils/auth";
import apiServiceJWT from "../../api/apiServiceJWT";
import { redirect } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrue } from "../../actions";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

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
    const res = await apiServiceJWT.signup({
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
      // TODO there is a problem here
      // console.log(setTrue);
      // dispatch(setTrue(true));

      auth.login(() => navigate("/app/dashboard/"));
      // console.log(userInfo);
    }
  }
  return (
    <>
      <Navigation />
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
