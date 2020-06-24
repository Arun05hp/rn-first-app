import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...courseGoals, enteredGoal]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter Text"
          placeholderTextColor="blue"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) => (
          <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "#ccc",
  },
});
