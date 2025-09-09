import StarshipCard from "./StarshipCard";

function StarshipList({ starshipsData, displayedStarships }) {
  return (
    <>
      <h2>Starships</h2>
      <p>Number of results: {displayedStarships.length}</p>
      <div className="cards-container">
        <StarshipCard
          starshipsData={starshipsData}
          displayedStarships={displayedStarships}
        />
      </div>
    </>
  );
}

export default StarshipList;
