import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Modal } from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setenteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setenteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter Text"
          placeholderTextColor="blue"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnWrap}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>

          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 5,
    marginBottom: 10,
  },
  btnWrap: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
