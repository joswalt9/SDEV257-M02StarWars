import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import NetInfo from "@react-native-community/netinfo";
import styles from "../styles";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(false); // Track online status
  const [isOffline, setIsOffline] = useState(false); // Track offline status

  // Shared value for scaling animation
  const scale = useSharedValue(1);

  // Animated style for button
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // Set up network status listener
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        setIsOnline(true);
        setIsOffline(false);
      } else {
        setIsOnline(false);
        setIsOffline(true);
      }
    });

    // Clean up the listener when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require("../assets/starwarslogo.png")}
        style={{ width: "25%", height: "25%" }}
        resizeMode="contain"
      />

      <Text>Welcome to the Star Wars Database!</Text>
      <Text>Explore Planets, Films, and Spaceships!</Text>

      <View style={{ marginTop: 20 }}>
        {/* Display the online/offline message */}
        {isOnline && (
          <View style={{ backgroundColor: "green", padding: 10 }}>
            <Text style={{ color: "white" }}>You are online!</Text>
          </View>
        )}

        {isOffline && (
          <View style={{ backgroundColor: "red", padding: 10 }}>
            <Text style={{ color: "white" }}>You are offline!</Text>
          </View>
        )}
      </View>
    </View>
  );
}
