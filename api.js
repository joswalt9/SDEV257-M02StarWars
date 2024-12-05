const BASE_URL = "https://swapi.tech/api";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching data from SWAPI:", error);
    return [];
  }
}

export async function fetchItems(endpoint, filter = "", asc = true) {
  const items = await fetchData(endpoint);
  console.log("Fetched items from API:", items);

  // Sort Feature
  return items
    .filter(
      (item) =>
        filter.length === 0 ||
        item.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort(
      asc
        ? (a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
        : (a, b) => (a.name < b.name ? 1 : a.name === b.name ? 0 : -1)
    );
}

// Films only!

export async function fetchFilms(filter = "", asc = true) {
  try {
    const res = await fetch(`${BASE_URL}/films`);
    const data = await res.json();

    if (!data.result) {
      console.error("No results found for films.");
      return [];
    }

    // Filter films by title
    const filteredFilms = data.result.filter((film) =>
      film.properties.title.toLowerCase().includes(filter.toLowerCase())
    );

    // Sort films alphabetically by title
    const sortedFilms = filteredFilms.sort((a, b) =>
      asc
        ? a.properties.title.localeCompare(b.title)
        : b.properties.title.localeCompare(a.title)
    );

    return sortedFilms;
  } catch (error) {
    console.error("Error fetching films:", error);
    return [];
  }
}
