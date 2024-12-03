import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, Image } from "react-native";
import styles from "../styles";
import ListContainer from "../listControllers/ListContainer";

export default function Spaceships({ navigation }) {
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
          {/* Spaceship List */}
          <ListContainer endpoint="starships" />
        </View>
      </ScrollView>
    </View>
  );
}
