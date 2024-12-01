import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeView() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a HomeView!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
