import "./SearchBar.css";
export default function SearchBar() {
  return (
    <form className="search-form">
      <input
        className="search-box"
        type="search"
        placeholder="Search..."
      ></input>
      <span className="material-symbols-outlined search-icon">search</span>
    </form>
  );
}
