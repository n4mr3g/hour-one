import "./SearchBar.css";

import { useState } from "react";
export default function SearchBar({ findOffers }) {
  // get all the offer and filter and just show filtered
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    findOffers(query);
    setQuery("");
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        value={query}
        className="search-box"
        type="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <span className="material-symbols-outlined search-icon">search</span>
    </form>
  );
}
