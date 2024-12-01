import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Registro exitoso", `Usuario registrado: ${userCredential.user.email}`);
      navigation.navigate("LogIn");
    } catch (error) {
      let errorMessage = "";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "El correo electrónico ya está en uso.";
          break;
        case "auth/invalid-email":
          errorMessage = "El correo electrónico no es válido.";
          break;
        case "auth/weak-password":
          errorMessage = "La contraseña es demasiado débil.";
          break;
        default:
          errorMessage = "Error al registrarse: " + error.message;
      }
      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Encabezado con Icono y Título */}
        <View style={styles.header}>
          <Icon name="place" size={50} color="#ff5b5b" />
          <Text style={styles.title}>Sign Up</Text>
        </View>

        <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          {/* Campos de Entrada */}
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
        </KeyboardAvoidingView>

        {/* Imagen Decorativa Inferior */}
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg",
            }}
            style={styles.image}
            imageStyle={styles.imageStyle}
          />
        </View>

        {/* Texto para redirigir a Log In */}
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <Text style={styles.loginRedirect}>
            Already have an account? <Text style={styles.loginLink}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "space-between",
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
  formContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
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
    marginTop: 10,
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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    borderBottomLeftRadius: 120,
    borderTopRightRadius: 120,
  },
  loginRedirect: {
    color: "#000",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  loginLink: {
    color: "#ff5b5b",
    fontWeight: "bold",
  },
});
