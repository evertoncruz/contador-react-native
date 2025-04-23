import React from "react";

import { styles } from "./styles";
import { View, Text } from "react-native";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default Home;
