import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import ListContainer from "../listControllers/ListContainer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Star Wars Database!</Text>
      <Text>Explore Planets, Films, and Spaceships!</Text>
    </View>
  );
}
