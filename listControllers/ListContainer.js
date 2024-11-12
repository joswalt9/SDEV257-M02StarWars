import React, { useState, useEffect } from "react";
import { fetchItems } from "../api"; // General fetch for other endpoints
import { fetchFilms } from "../api"; // Specific fetch for films
import List from "./List";

export default function ListContainer({ endpoint }) {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (endpoint === "films") {
      // Fetch films data using the dedicated function
      fetchFilms(filter, asc).then((items) => {
        const mappedData = items.map((item, i) => ({
          key: i.toString(),
          value: item.properties.title, // Use title for films
        }));
        setData(mappedData);
      });
    } else {
      // Fetch other items (planets, spaceships, etc.) using the general fetchItems
      fetchItems(endpoint, filter, asc).then((items) => {
        const mappedData = items.map((item, i) => ({
          key: i.toString(),
          value: item.name, // Use name for other items
        }));
        setData(mappedData);
      });
    }
  }, [endpoint, filter, asc]);

  return (
    <List
      data={data}
      asc={asc}
      onFilter={(text) => {
        setFilter(text);
        if (endpoint === "films") {
          fetchFilms(text, asc).then((items) =>
            setData(
              items.map((item, i) => ({
                key: i.toString(),
                value: item.title, // Use title for films
              }))
            )
          );
        } else {
          fetchItems(endpoint, text, asc).then((items) =>
            setData(
              items.map((item, i) => ({
                key: i.toString(),
                value: item.name, // Use name for other items
              }))
            )
          );
        }
      }}
      onSort={() => {
        setAsc(!asc);
        if (endpoint === "films") {
          fetchFilms(filter, !asc).then((items) =>
            setData(
              items.map((item, i) => ({
                key: i.toString(),
                value: item.title, // Use title for films
              }))
            )
          );
        } else {
          fetchItems(endpoint, filter, !asc).then((items) =>
            setData(
              items.map((item, i) => ({
                key: i.toString(),
                value: item.name, // Use name for other items
              }))
            )
          );
        }
      }}
    />
  );
}
