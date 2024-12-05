import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { fetchItems, fetchFilms } from "../api";
import List from "./List";
import { useNavigation } from "@react-navigation/native";

export default function ListContainer({ endpoint }) {
  const navigation = useNavigation();
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
        details: item,
      }));
      setData(mappedData);
    };
    fetchData();
  }, [endpoint, filter, asc]);

  const handleSwipe = (item) => {
    if (endpoint === "planets") {
      navigation.navigate("PlanetDetail", { details: item.details });
    } else {
      console.warn("Navigation to PlanetDetail is only allowed for planets.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <List
        data={data}
        asc={asc}
        onFilter={(text) => setFilter(text)}
        onSort={() => setAsc(!asc)}
        onSwipe={handleSwipe}
      />
    </View>
  );
}
