import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PlanetDetail({ route }) {
  const { details } = route.params || {};
  const [planet, setPlanet] = useState(details);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (details?.url) {
      setLoading(true);
      fetch(details.url)
        .then((response) => response.json())
        .then((data) => {
          setPlanet(data.result?.properties || details);
        })
        .catch((error) => console.error("Error fetching planet data:", error))
        .finally(() => setLoading(false));
    }
  }, [details]);

  if (loading) {
    return <Text>Loading planet details...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{planet.name}</Text>
      <Text>Population: {planet.population || "N/A"}</Text>
      <Text>Climate: {planet.climate || "Unknown"}</Text>
      <Text>Terrain: {planet.terrain || "Unknown"}</Text>
      <Text>Diameter: {planet.diameter || "Unknown"}</Text>
      <Text>Gravity: {planet.gravity || "Unknown"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
