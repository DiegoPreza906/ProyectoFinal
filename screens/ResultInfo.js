import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";

export default function ResultInfo({ route, navigation }) {
  const { destination } = route.params; // Obtiene el destino seleccionado
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const API_KEY = "9a4e24642371195567b6eb0a08caee40"; // Reemplaza con tu API Key de OpenWeather
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${API_KEY}&units=metric`
        );

        setWeatherData(response.data);
      } catch (error) {
        Alert.alert(
          "Error",
          `No se pudo obtener la información del clima para ${destination}.`
        );
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [destination]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff5b5b" />
        <Text style={styles.loadingText}>Fetching weather data...</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text style={styles.noResultsText}>
          No se encontraron resultados para el destino seleccionado.
        </Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      }}
      style={styles.background}
    >
      <View style={styles.card}>
        <Text style={styles.city}>
          <Text style={styles.icon}>📍</Text> {weatherData.name},{" "}
          {weatherData.sys.country}
        </Text>
        <Text style={styles.temp}>{Math.round(weatherData.main.temp)}°C</Text>
        <Text style={styles.feelsLike}>
          Feels Like: {Math.round(weatherData.main.feels_like)}°C
        </Text>
        <Text style={styles.weather}>
          {weatherData.weather[0].description}
        </Text>
        <View style={styles.extraInfo}>
          <Text style={styles.info}>💨 Wind: {weatherData.wind.speed} m/s</Text>
          <Text style={styles.info}>🌄 Humidity: {weatherData.main.humidity}%</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  noResultsText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  city: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff5b5b",
    marginBottom: 10,
  },
  temp: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
  },
  feelsLike: {
    fontSize: 18,
    color: "#888",
    marginVertical: 5,
  },
  weather: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#555",
    marginVertical: 10,
  },
  extraInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
  },
  info: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ff5b5b",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
