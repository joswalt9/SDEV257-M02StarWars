import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import styles from "../styles";
import ListContainer from "../listControllers/ListContainer";
import Modal from "../modal/Modal";

export default function Spaceships({ navigation }) {
  {
    /* Modal Variables*/
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearchSubmit = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.listContainer}>
      {/* Image */}
      <Image
        source={require("../assets/starwarslogo.png")}
        style={{ width: "25%", height: "25%" }}
        resizeMode="contain"
      />

      {/* Modal */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginVertical: 20,
          width: "80%",
          paddingHorizontal: 8,
          borderRadius: 5,
        }}
        placeholder="Enter search term..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSearchSubmit} />

      {/* Custom Modal */}
      <Modal
        visible={modalVisible}
        content={`You entered: ${searchTerm}`}
        onClose={() => setModalVisible(false)}
      />

      <ListContainer endpoint="starships" />
    </View>
  );
}
