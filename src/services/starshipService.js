const BASE_URL = "https://swapi.info/api"

export const getStarships = async () => {
  try {
    const response = await fetch(`${BASE_URL}/starships`);
    if (!response.ok) throw new Error(`Unable to fetch data from API`);
    return await response.json();
  } catch (err) {
    console.log(`Error fetching data`, err);
  }
}


