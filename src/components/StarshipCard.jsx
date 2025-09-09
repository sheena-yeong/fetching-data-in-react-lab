function StarshipCard({ starshipsData, displayedStarships }) {

  console.log("Hi from StarshipCard", displayedStarships)
  return (
    <>
      {displayedStarships.map((starship, index) => (
            <div key={index} className="card">
              <p style={{ fontWeight: "bold" }}>{starship.name}</p>
              <p>Class: {starship.starship_class}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              <p>Model: {starship.model}</p>
            </div>
          ))}
    </>
  );
}

export default StarshipCard;
