import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAf4vbzSk7jmqGdcj59JNg07UzqwhoV3u8",
  authDomain: "proyecto-ianki.firebaseapp.com",
  projectId: "proyecto-ianki",
  storageBucket: "proyecto-ianki.firebasestorage.app",
  messagingSenderId: "711122229447",
  appId: "1:711122229447:web:47dd2f3ee0ea733563c6e2",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para manejar el login
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuario autenticado:", userCredential.user);
    return userCredential.user; // Retorna los datos del usuario autenticado
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    throw new Error(error.message); // Lanza el error para manejarlo en el componente
  }
};

// Función para registrar un nuevo usuario
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado:", userCredential.user);
    return userCredential.user; // Retorna los datos del usuario registrado
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    throw new Error(error.message); // Lanza el error para manejarlo en el componente
  }
};

// Exporta las instancias necesarias
export { auth };
export default app;
