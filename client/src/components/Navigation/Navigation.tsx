import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [listCount, setListCount] = useState(1);
  return (
    <div className="navigation-container">
      <div>Logo</div>
      <SearchBar />
      <div className="nav-options">
        <Link to={"/"} className="my-list">
          My List{" "}
          <span className={listCount > 0 ? "list-count" : ""}>
            {listCount > 0 ? listCount : ""}
          </span>
        </Link>
        <div>
          <span className="material-symbols-outlined">account_circle</span>
        </div>
      </div>
    </div>
  );
}
