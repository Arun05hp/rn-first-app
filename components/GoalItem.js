import React from "react";
import { Text, StyleSheet, View } from "react-native";
const GoalItem = ({ title }) => {
  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "#ccc",
  },
});

export default GoalItem;
