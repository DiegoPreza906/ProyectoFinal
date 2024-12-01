import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native"; // Para la navegación

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); // Hook para manejar la navegación

  const handleSignUp = () => {
    alert(`Registro exitoso para: ${email}`);
  };

  return (
    <View style={styles.container}>
      {/* Icono y título */}
      <View style={styles.header}>
        <Icon name="place" size={50} color="#ff5b5b" />
        <Text style={styles.title}>Sign Up</Text>
      </View>

      {/* Campos de entrada */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Botón de Sign Up */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Imagen decorativa inferior */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=pexels-sagui-andrea-200115-618833.jpg&fm=jpg",
          }}
          style={styles.image}
        />
      </View>

      {/* Botón para redirigir a Log In */}
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <Text style={styles.loginRedirect}>
          Already have an account? <Text style={styles.loginLink}>Log In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    elevation: 2,
  },
  button: {
    backgroundColor: "#ff5b5b",
    width: "90%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 120,
    borderTopRightRadius: 120,
  },
  loginRedirect: {
    color: "#000",
    fontSize: 14,
    marginTop: 10,
  },
  loginLink: {
    color: "#ff5b5b",
    fontWeight: "bold",
  },
});
