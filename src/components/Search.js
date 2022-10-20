import React, { useState } from "react";

function Search({matchPlant}) {
  const [searchForm, setSearchForm] = useState("");
  
  function handleChange(e) {
    setSearchForm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    matchPlant(searchForm);
    setSearchForm("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchForm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
