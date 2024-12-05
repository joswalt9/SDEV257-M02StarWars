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
    navigation.navigate("PlanetDetail", { details: item.details });
    console.log("Navigating with Details:", item.details);
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
