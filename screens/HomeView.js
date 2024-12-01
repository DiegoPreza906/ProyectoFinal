import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function HomeView() {
  const [weatherCondition, setWeatherCondition] = useState("");
  const [idealTemp, setIdealTemp] = useState("");
  const [highestTemp, setHighestTemp] = useState("");
  const [lowestTemp, setLowestTemp] = useState("");

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Weather Condition", value: "" },
    { label: "Sunny", value: "sunny" },
    { label: "Cloudy", value: "cloudy" },
    { label: "Rainy", value: "rainy" },
    { label: "Snowy", value: "snowy" },
  ]);

  const handleSave = () => {
    console.log("Weather Condition:", weatherCondition);
    console.log("Ideal Temp:", idealTemp);
    console.log("Highest Temp:", highestTemp);
    console.log("Lowest Temp:", lowestTemp);
    alert("Información guardada correctamente");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/originals/54/7b/30/547b30216e7a95667cd611965fa0c8e7.jpg",
      }}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <Text style={styles.logo}>
            Weather <Text style={styles.logoAccent}>Go</Text>
          </Text>
          <Text style={styles.title}>
            Choose your perfect <Text style={styles.titleAccent}>weather</Text>
          </Text>

          <DropDownPicker
            open={open}
            value={weatherCondition}
            items={items}
            setOpen={setOpen}
            setValue={setWeatherCondition}
            setItems={setItems}
            placeholder="☁️ Select Weather Condition"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            scrollEnabled={false}
          />

          <TextInput
            style={styles.input}
            placeholder="🌡️ Set Your Ideal Temp"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={idealTemp}
            onChangeText={setIdealTemp}
          />
          <TextInput
            style={styles.input}
            placeholder="☀️ Highest Temp (Temp in Celsius)"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={highestTemp}
            onChangeText={setHighestTemp}
          />
          <TextInput
            style={styles.input}
            placeholder="❄️ Lowest Temp (Temp in Celsius)"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={lowestTemp}
            onChangeText={setLowestTemp}
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Find Your Perfect Trip</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center", // Centra verticalmente el contenido
    alignItems: "center",
  },
  container: {
    width: "85%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  logoAccent: {
    color: "#ff5b5b",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    color: "#555",
  },
  titleAccent: {
    color: "#ff5b5b",
  },
  dropdown: {
    marginVertical: 8,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  dropdownContainer: {
    borderColor: "#ccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    color: "#333",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#ff5b5b",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
