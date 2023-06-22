import "./SearchBar.css";

import { useState } from "react";

export default function SearchBar({ findOffers }: { findOffers: Function }) {
  // get all the offer and filter and just show filtered
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    findOffers(query);
    setQuery("");
  }

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        value={query}
        className="search-box"
        type="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      ></input>

      {/* TODO: search function */}
      <a href="#" className="search-button">
        <span className="material-symbols-outlined search-icon">search</span>
        </a>
    </form>
  );
}
