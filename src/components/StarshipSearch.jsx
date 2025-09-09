import { useState } from "react";

function StarshipSearch({
  searchStarships,
  starshipsData,
  displayedStarships,
  setDisplayedStarships,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchStarships(searchTerm);
    if (searchTerm) setIsVisible(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setDisplayedStarships(starshipsData);
    setSearchTerm("")
    setIsVisible(false)
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
        {isVisible && <button onClick={handleReset}>
          Show all starships
        </button>}
      </form>
    </>
  );
}

export default StarshipSearch;
