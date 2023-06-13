import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import apiServiceJWT from "../../api/apiServiceJWT";

export default function Navigation() {
  const [listCount, setListCount] = useState(8);
  const user = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  console.log(user);

  function handleSignOut() {
    apiServiceJWT.logout("accessToken");
    dispatch(profile({}));
  }

  return (
    <div className="navigation-container">
      <div className="logo same-width ">Hour One</div>
      <SearchBar />
      <div className="nav-options same-width ">
        <div className="mylist-wrapper">
          {/* <Link to={"/app/dashboard/profile"} className="my-list">
            About
          </Link>
          <Link to={"/app/dashboard/profile"} className="my-list">
            Explore
          </Link> */}

          {user.name && (
            <>
              <Link to={"/app/dashboard/profile"} className="my-list">
                Dashboard
              </Link>
              <div className={listCount > 0 ? "list-count" : ""}>
                {listCount > 0 ? listCount : ""}
              </div>
              <img
                className="user-image"
                src={"https://i.pravatar.cc/150?u=17@pravatar.com"}
                alt="user"
              />
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
