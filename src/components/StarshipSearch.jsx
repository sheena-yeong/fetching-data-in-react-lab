import { useState } from "react";

function StarshipSearch({
  searchStarships,
  starshipsData,
  displayedStarships,
  setDisplayedStarships,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [btnDisplay, setBtnDisplay] = useState("hidden");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchStarships(searchTerm);
    if (searchTerm) setBtnDisplay("visible");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setDisplayedStarships(starshipsData);
    setSearchTerm("")
    setBtnDisplay("hidden")
  };

  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search Term:{" "}
          <input
            value={searchTerm}
            placeholder="Search for a starship by name"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </label>
        <button type="submit">Search</button>
        <button className={btnDisplay} onClick={handleReset}>
          Show all starships
        </button>
      </form>
    </>
  );
}

export default StarshipSearch;
