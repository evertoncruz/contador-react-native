import React from "react";
import { View, StyleSheet } from "react-native";
import { Counter } from "../../components/Counter/Counter";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;
