import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <div>Logo</div>
      <SearchBar />
      <div className="nav-options">
        <div>About</div>
        <div>Sign in</div>
        <div>Sign up</div>
      </div>
    </div>
  );
}
