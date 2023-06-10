import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <div>Logo</div>
      <SearchBar />
      <div className="nav-options">
        <div>My Exchange</div>
        <div>
          <span className="material-symbols-outlined">account_circle</span>
        </div>
      </div>
    </div>
  );
}
