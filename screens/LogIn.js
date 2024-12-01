import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar íconos de Material

const auth = getAuth();

export default function LogIn({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleAuthentication = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, llena todos los campos');
      return;
    }

    if (isLogin) {
      // Login
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setIsAuthenticated(true); // Autenticado exitosamente
        setMessage('Login exitoso!');
      } catch (error) {
        if (error.code === 'auth/invalid-email') {
          setMessage('El correo electrónico no es válido.');
        } else if (error.code === 'auth/user-not-found') {
          setMessage('No se encuentra un usuario con ese correo electrónico.');
        } else if (error.code === 'auth/wrong-password') {
          setMessage('La contraseña es incorrecta.');
        } else {
          setMessage('Error al iniciar sesión: ' + error.message);
        }
      }
    } else {
      // Registro
      if (!username) {
        Alert.alert('Error', 'Por favor, ingresa un nombre de usuario');
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setIsAuthenticated(true); // Usuario registrado y autenticado
        setMessage('Usuario registrado exitosamente!');
      } catch (error) {
        if (error.code === 'auth/invalid-email') {
          setMessage('El correo electrónico no es válido.');
        } else if (error.code === 'auth/email-already-in-use') {
          setMessage('El correo electrónico ya está en uso.');
        } else if (error.code === 'auth/weak-password') {
          setMessage('La contraseña es demasiado débil.');
        } else {
          setMessage('Error al registrar: ' + error.message);
        }
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.signUpContainer}>
        <View style={styles.iconContainer}>
          <Icon name="place" size={40} color="#fff" />
        </View>
        <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.signUpButton} onPress={handleAuthentication}>
          <Text style={styles.signUpButtonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        </TouchableOpacity>

        {message && <Text>{message}</Text>}

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  signUpContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 50,
  },
  iconContainer: {
    backgroundColor: '#ff6666',
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#ff6666',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleText: {
    color: '#ff6666',
    fontWeight: 'bold',
  },
});
