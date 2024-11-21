import React, { useState, useEffect } from "react";
import { fetchItems, fetchFilms } from "../api";
import List from "./List";
import Modal from "../modal/Modal";

export default function ListContainer({ endpoint }) {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const items =
        endpoint === "films"
          ? await fetchFilms(filter, asc)
          : await fetchItems(endpoint, filter, asc);
      const mappedData = items.map((item, i) => ({
        key: i.toString(),
        value: endpoint === "films" ? item.properties.title : item.name,
      }));
      setData(mappedData);
    };
    fetchData();
  }, [endpoint, filter, asc]);

  const handleSwipe = (itemText) => {
    setModalContent(itemText); // Set the text of the item
    setModalVisible(true); // Show the modal
  };

  return (
    <View style={{ flex: 1 }}>
      <List
        data={data}
        asc={asc}
        onFilter={(text) => setFilter(text)}
        onSort={() => setAsc(!asc)}
        onSwipe={handleSwipe}
      />
      {/* Modal */}
      <Modal
        visible={modalVisible}
        content={modalContent}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
