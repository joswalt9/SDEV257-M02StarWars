import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import styles from "../styles";
import Modal from "../modal/Modal";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // Shared value for scaling animation
  const scale = useSharedValue(1);

  // Animated style for button
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleSearchSubmit = () => {
    setModalVisible(true);
  };

  const handlePressIn = () => {
    scale.value = withTiming(0.9, { duration: 100 });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Star Wars Database!</Text>
      <Text>Explore Planets, Films, and Spaceships!</Text>

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

      {/* Animated Submit Button */}
      <Animated.View style={animatedStyle}>
        <Pressable
          onPress={handleSearchSubmit}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={buttonStyles.button}
        >
          <Text style={buttonStyles.buttonText}>Submit</Text>
        </Pressable>
      </Animated.View>

      {/* Custom Modal */}
      <Modal
        visible={modalVisible}
        content={`You entered: ${searchTerm}`}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
