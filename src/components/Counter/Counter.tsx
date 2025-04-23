import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useCounter } from "../../context/CounterContext";
import { styles } from "./styles";

export const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={increment} />
      <Button title="Decrementar" onPress={decrement} />
    </View>
  );
};
