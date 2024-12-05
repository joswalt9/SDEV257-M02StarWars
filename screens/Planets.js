import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, Image } from "react-native";
import styles from "../styles";
import ListContainer from "../listControllers/ListContainer";

export default function Planets({ navigation }) {
  const handleNavigateToDetail = (planetDetails) => {
    console.log("Navigating with details:", planetDetails);
    navigation.navigate("PlanetDetail", { details: planetDetails.properties });
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require("../assets/starwarslogo.png")}
        style={{ width: "25%", height: "25%" }}
        resizeMode="contain"
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.listContainer}>
          {/* Planet List */}
          <ListContainer
            endpoint="planets"
            onSwipe={(planetDetails) =>
              handleNavigateToDetail(planetDetails.properties)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
