import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import ListContainer from "../listControllers/ListContainer";

export default function Spaceships({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Spaceships Content</Text>
      <ListContainer endpoint="starships" />
    </View>
  );
}
