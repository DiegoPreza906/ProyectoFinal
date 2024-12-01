import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Para el icono
import { logIn } from "../firebase"; // Asegúrate de que esta función esté correctamente implementada

export default function LogIn() {
  const navigation = useNavigation(); // Hook para manejar navegación
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    try {
      const user = await logIn(email, password);
      Alert.alert("Login exitoso", `Bienvenido, ${user.email}`);
      navigation.navigate("HomeView"); // Redirige a HomeView si es exitoso
    } catch (error) {
      Alert.alert("Error al iniciar sesión", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Encabezado con Icono y Título */}
      <View style={styles.header}>
        <Icon name="place" size={50} color="#ff5b5b" />
        <Text style={styles.title}>Log In</Text>
      </View>

      {/* Campos de Entrada */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
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

      {/* Botón de Log In */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogIn}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {/* Imagen inferior */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/foto-gratis/colores-otono-hojas-color-amarillo-dorado-marron-cubren-suelo-debajo-arboles_181624-31091.jpg",
          }}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
        />
      </View>

      {/* Texto para redirigir a Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
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
  loginButton: {
    backgroundColor: "#ff5b5b",
    width: "90%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    borderBottomLeftRadius: 120,
    borderTopRightRadius: 120,
  },
  signupText: {
    color: "#000",
    fontSize: 14,
    marginTop: 10,
  },
  signupLink: {
    color: "#ff5b5b",
    fontWeight: "bold",
  },
});
