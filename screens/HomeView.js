import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importación correcta

const HomeView = () => {
  const [weatherCondition, setWeatherCondition] = useState('');
  const [idealTemp, setIdealTemp] = useState('');
  const [highestTemp, setHighestTemp] = useState('36');
  const [lowestTemp, setLowestTemp] = useState('12');

  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/featured/?city,night' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.logo}>
          Weather <Text style={styles.logoAccent}>Go</Text>
        </Text>

        <Text style={styles.title}>
          Choose your perfect <Text style={styles.titleAccent}>weather</Text>
        </Text>

        {/* Weather Condition Dropdown */}
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={weatherCondition}
            onValueChange={(itemValue) => setWeatherCondition(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="☁️ Weather Condition" value="" />
            <Picker.Item label="Sunny" value="sunny" />
            <Picker.Item label="Cloudy" value="cloudy" />
            <Picker.Item label="Rainy" value="rainy" />
            <Picker.Item label="Snowy" value="snowy" />
          </Picker>
        </View>

        {/* Set Your Ideal Temp */}
        <TextInput
          style={styles.input}
          placeholder="🌡️ Set Your Ideal Temp"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={idealTemp}
          onChangeText={setIdealTemp}
        />

        {/* Highest Temp */}
        <TextInput
          style={styles.input}
          placeholder={`☀️ Highest Temp   ${highestTemp} (Temp in Celsius)`}
          placeholderTextColor="#888"
          editable={false}
        />

        {/* Lowest Temp */}
        <TextInput
          style={styles.input}
          placeholder={`❄️ Lowest Temp   ${lowestTemp} (Temp in Celsius)`}
          placeholderTextColor="#888"
          editable={false}
        />

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find Your Perfect Trip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  logoAccent: {
    color: '#ff5b5b',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
  },
  titleAccent: {
    color: '#ff5b5b',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#ff5b5b',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeView;
