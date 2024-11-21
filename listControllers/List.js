import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, ScrollView } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import styles from "../styles";
import ListControls from "./ListControls";
import Modal from "../modal/Modal";

export default function List({ Controls, data, onFilter, onSort, asc }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSwipe = (item) => {
    setModalContent(item.value);
    setModalVisible(true);
  };

  return (
    <ScrollView>
      {/* Modal for swipe action */}
      <Modal
        visible={modalVisible}
        content={modalContent}
        onClose={() => setModalVisible(false)}
      />
      <Controls {...{ onFilter, onSort, asc }} />
      {data.map((item) => (
        <Swipeable
          key={item.key}
          onSwipeableOpen={() => handleSwipe(item)} // Trigger modal on swipe
        >
          <Text style={styles.item}>{item.value}</Text>
        </Swipeable>
      ))}
    </ScrollView>
  );
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};

List.defaultProps = {
  Controls: ListControls,
};
