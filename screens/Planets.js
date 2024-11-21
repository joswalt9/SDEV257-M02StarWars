import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles";
import ListContainer from "../listControllers/ListContainer";
import Modal from "../modal/Modal";

export default function Planets({ navigation }) {
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
      <Text>Planets Content</Text>

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

      <ListContainer endpoint="planets" />
    </View>
  );
}
