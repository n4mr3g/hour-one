import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import apiServiceJWT from "../../api/apiServiceJWT";

export default function Navigation({ findOffers }) {
  const [listCount, setListCount] = useState(8);
  const user = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  function handleSignOut() {
    apiServiceJWT.logout("accessToken");
    dispatch(profile({}));
  }

  return (
    <div className="navigation-container">
      <div className="logo same-width ">Hour One</div>
      <SearchBar findOffers={findOffers} />
      <div className="nav-options same-width ">
        <div className="mylist-wrapper">
          {user.name && (
            <>
              <Link to={"/app/dashboard/profile"} className="my-list">
                Dashboard
              </Link>
              <div className={listCount > 0 ? "list-count" : ""}>
                {listCount > 0 ? listCount : ""}
              </div>
              <img className="user-image" src={user.image} alt="user" />
              <Link
                onClick={handleSignOut}
                className="signout-link"
                to={"/app/signup"}
              >
                {" "}
                Log Out
              </Link>
            </>
          )}
          {!user.name && (
            <>
              <Link className="signup-link" to={"/app/signup"}>
                {" "}
                Sign Up
              </Link>
              <Link className="signin-link" to={"/app/signin"}>
                {" "}
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
