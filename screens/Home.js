import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles";
import Modal from "../modal/Modal";

export default function Home() {
  {
    /* Modal Variables*/
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearchSubmit = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Star Wars Database!</Text>
      <Text>Explore Planets, Films, and Spaceships!</Text>

      {/* Modal */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginVertical: 20,
          width: "30%",
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
    </View>
  );
}
