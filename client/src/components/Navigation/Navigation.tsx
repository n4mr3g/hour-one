import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [listCount, setListCount] = useState(8);
  return (
    <div className="navigation-container">
      <div className="logo">Hour One</div>
      <SearchBar />
      <div className="nav-options">
        <div className="mylist-wrapper">
          <Link to={"/app/dashboard"} className="my-list">
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
