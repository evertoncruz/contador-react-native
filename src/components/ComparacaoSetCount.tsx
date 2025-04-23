import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ComparacaoSetCount = () => {
  const [countErrado, setCountErrado] = useState(0);
  const [countCerto, setCountCerto] = useState(0);

  const incrementarErrado = () => {
    setCountErrado(countErrado + 1);
    setCountErrado(countErrado + 1);
  };

  const incrementarCerto = () => {
    setCountCerto((prev) => prev + 1);
    setCountCerto((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Exemplo com count + 1 (Errado)</Text>
        <Text style={styles.count}>Contador: {countErrado}</Text>
        <Button title="Incrementar 2x" onPress={incrementarErrado} />
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Exemplo com prev + 1 (Certo)</Text>
        <Text style={styles.count}>Contador: {countCerto}</Text>
        <Button title="Incrementar 2x" onPress={incrementarCerto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0",
  },
  box: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  count: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default ComparacaoSetCount;
