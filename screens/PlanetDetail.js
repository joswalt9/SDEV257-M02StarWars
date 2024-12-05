import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PlanetDetail({ route }) {
  const { details } = route.params || {};
  const planet = details.properties || details;
  console.log("Planet details:", planet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{planet.name}</Text>
      <Text>Population: {planet.population || "N/A"}</Text>
      <Text>Climate: {planet.climate}</Text>
      <Text>Terrain: {planet.terrain}</Text>
      <Text>Diameter: {planet.diameter}</Text>
      <Text>Gravity: {planet.gravity}</Text>
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
