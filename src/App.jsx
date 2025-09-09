// src/App.jsx
import { getStarships } from "./services/starShipService";
import { useState, useEffect } from "react";
import StarshipList from "./components/StarshipList";
import StarshipSearch from "./components/StarshipSearch";

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  function searchStarships(searchTerm) {
    setDisplayedStarships(
      starshipsData.filter((starship) =>
        starship.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStarships();
      if (data) {
        setStarshipsData(data);
        setDisplayedStarships(data);
      }
    };

    fetchData();
  }, []);

  console.log("Hi from App.jsx, here is the fetched data", starshipsData);

  return (
    <>
      <StarshipSearch
        searchStarships={searchStarships}
        starshipsData={starshipsData}
        displayedStarships={displayedStarships}
        setDisplayedStarships={setDisplayedStarships}
      />
      <StarshipList
        starshipsData={starshipsData}
        searchStarships={searchStarships}
        displayedStarships={displayedStarships}
      />
    </>
  );
};

export default App;
