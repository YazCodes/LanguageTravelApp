import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DestinationMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Destination</Text>

      {/* Japan Button */}
      <TouchableOpacity
        style={[styles.button, styles.activeButton]}
        onPress={() => navigation.navigate('JapanMap')}
      >
        <Text style={styles.buttonText}>Japan</Text>
      </TouchableOpacity>

      {/* Vietnam Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.disabledButton]} disabled={true}>
          <Text style={styles.buttonText}>Vietnam</Text>
        </TouchableOpacity>
        <Text style={styles.sticker}>Coming Soon!</Text>
      </View>

      {/* Spain Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.disabledButton]} disabled={true}>
          <Text style={styles.buttonText}>Spain</Text>
        </TouchableOpacity>
        <Text style={styles.sticker}>Coming Soon!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF4F0', // Light peach background
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6347', // Vibrant red-orange for the header
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'relative',
    width: '80%',
    marginVertical: 15,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5, // Adds shadow on Android
  },
  activeButton: {
    backgroundColor: '#4CAF50', // Vibrant green for active button
  },
  disabledButton: {
    backgroundColor: '#E0E0E0', // Light grey for disabled buttons
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for contrast
  },
  sticker: {
    position: 'absolute',
    top: -15,
    right: -10,
    backgroundColor: '#FF4500', // Bright orange-red for sticker
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // Shadow for Android
    transform: [{ rotate: '-10deg' }], // Slight rotation for a playful effect
  },
});

export default DestinationMenu;


