import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import ListControls from "./ListControls";
import Swipeable from "../components/Swipeable";

export default function List({
  Controls,
  data,
  onFilter,
  onSort,
  asc,
  onSwipe,
}) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
      renderItem={({ item }) => (
        <Swipeable onSwipe={() => onSwipe(item)} name={item.value} />
      )}
    />
  );
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
  onSwipe: PropTypes.func.isRequired,
};

List.defaultProps = {
  Controls: ListControls,
};
