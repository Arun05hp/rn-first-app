import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setenteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Enter Text"
        placeholderTextColor="blue"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 5,
  },
});

export default GoalInput;
