import React from "react";
import { CounterProvider } from "./src/context/CounterContext";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

const App = () => (
  <CounterProvider>
    <HomeScreen />
  </CounterProvider>
);

export default App;
