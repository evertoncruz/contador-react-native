import React from "react";
import { CounterProvider } from "./src/context/CounterContext";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import { StyleSheet, View } from "react-native";

const App = () => (
  <CounterProvider>
    <View style={styles.container}>
      <HomeScreen />
    </View>
  </CounterProvider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
