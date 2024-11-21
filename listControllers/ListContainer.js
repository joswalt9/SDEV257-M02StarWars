import React, { useState, useEffect } from "react";
import { fetchItems, fetchFilms } from "../api";
import List from "./List";

export default function ListContainer({ endpoint }) {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const items =
        endpoint === "films"
          ? await fetchFilms(filter, asc)
          : await fetchItems(endpoint, filter, asc);
      const mappedData = items.map((item, i) => ({
        key: i.toString(),
        value: endpoint === "films" ? item.properties.title : item.name,
      }));
      setData(mappedData);
    };
    fetchData();
  }, [endpoint, filter, asc]);

  const handleSwipe = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  return (
    <List
      data={data}
      asc={asc}
      onFilter={(text) => setFilter(text)}
      onSort={() => setAsc(!asc)}
      onSwipe={handleSwipe}
    />
  );
}
