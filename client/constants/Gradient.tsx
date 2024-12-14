import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']} // Gradient colors
      style={styles.gradient}>
      <Text style={styles.text}>Expo Gradient Example</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
