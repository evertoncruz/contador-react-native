import React from "react";
import { View, Text } from "react-native";
import { Counter } from "../../components/Counter/Counter";
import { styles } from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONTATOR REACT NATIVE</Text>
      <Counter />
    </View>
  );
};

export default HomeScreen;
