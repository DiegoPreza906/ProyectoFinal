import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";

export default function HomeView() {
  const [destination, setDestination] = useState("");

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Mexico City, MX", value: "Mexico City" },
    { label: "New York, US", value: "New York" },
    { label: "London, UK", value: "London" },
    { label: "Tokyo, JP", value: "Tokyo" },
  ]);

  const navigation = useNavigation();

  const handleFindTrip = () => {
    if (!destination) {
      Alert.alert("Error", "Por favor selecciona un destino.");
      return;
    }

    // Navegar a ResultInfo con el destino seleccionado
    navigation.navigate("ResultInfo", { destination });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              Choose your perfect <Text style={styles.titleAccent}>destination</Text>
            </Text>

            <DropDownPicker
              open={open}
              value={destination}
              items={items}
              setOpen={setOpen}
              setValue={setDestination}
              setItems={setItems}
              placeholder="🌍 Select Your Destination"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              scrollEnabled={false}
            />

            <TouchableOpacity style={styles.button} onPress={handleFindTrip}>
              <Text style={styles.buttonText}>Find Your Perfect Trip</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
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
