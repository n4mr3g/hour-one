import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [listCount, setListCount] = useState(8);
  return (
    <div className="navigation-container">
      <div className="logo same-width">Hour One</div>
      <SearchBar />
      <div className="nav-options same-width">
        <div className="mylist-wrapper">
          {/* <Link to={"/app/dashboard/profile"} className="my-list">
            About
          </Link>
          <Link to={"/app/dashboard/profile"} className="my-list">
            Explore
          </Link> */}
          <Link to={"/app/dashboard/profile"} className="my-list">
            Dashboard
          </Link>
          <div className={listCount > 0 ? "list-count" : ""}>
            {listCount > 0 ? listCount : ""}
          </div>
        </div>

        <img
          className="user-image"
          src={"https://i.pravatar.cc/150?u=17@pravatar.com"}
          alt="user"
        />
      </div>
    </div>
  );
}
