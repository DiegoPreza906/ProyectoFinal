import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeView from './screens/HomeView';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

