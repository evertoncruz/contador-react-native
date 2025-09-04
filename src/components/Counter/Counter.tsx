import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useCounter } from "../../context/CounterContext";
import { styles } from "./styles";

export const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.counterTitle}>Contador: {count}</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonIncrement]}
        onPress={increment}
      >
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>Decrementar</Text>
      </TouchableOpacity>
    </View>
  );
};
