import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import ListContainer from "../listControllers/ListContainer";

export default function Planets({ navigation }) {
  return (
    <View style={styles.listContainer}>
      <Text>Planets Content</Text>
      <ListContainer endpoint="planets" />
    </View>
  );
}
