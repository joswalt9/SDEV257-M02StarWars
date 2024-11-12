import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import ListContainer from "../listControllers/ListContainer";

export default function Films({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Films Content</Text>
      <ListContainer endpoint="films" />
    </View>
  );
}
