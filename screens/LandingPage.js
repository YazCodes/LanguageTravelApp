import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const LandingPage = ({ navigation }) => {
  // State to hold the button text
  const [buttonText, setButtonText] = useState('Start Learning!');

  // Array of texts to cycle through
  const buttonTexts = ['Start Learning!', '行くぞ!', 'thưởng thức', '¡Vamos!'];

  useEffect(() => {
    // Function to update the button text
    const updateText = () => {
      const randomIndex = Math.floor(Math.random() * buttonTexts.length);
      setButtonText(buttonTexts[randomIndex]);
    };

    // Set an interval to change the text every 2 seconds
    const intervalId = setInterval(updateText, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Minute</Text>
      <Text style={styles.subtitle}>Your #1 Travel Language Learning App</Text>
      <Text style={styles.secondaryText}>
        Going on holiday and don't know the language?
      </Text>
      <Text style={styles.secondaryText}>Don't worry, we’ve got you covered.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Your destination')}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', // Sleek dark background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: '#FFD700', // Premium gold color for the title
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Avenir-Black', // Modern, clean font (if supported)
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF', // Clean white text
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.8, // Slightly muted white text
    fontFamily: 'Avenir-Medium',
  },
  secondaryText: {
    fontSize: 16,
    color: '#D3D3D3', // Subtle gray text
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Avenir-Light',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FF8C00', // Base orange color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25, // Rounded edges for a friendly look
    shadowColor: '#FF4500', // Strong shadow matching the color scheme
    shadowOffset: { width: 0, height: 6 }, // Downward shadow for 3D look
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8, // Adds shadow for Android
    position: 'relative', // For additional styling if needed
  },
  buttonText: {
    color: '#FFFFFF', // White text for contrast
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Avenir-Heavy',
    textShadowColor: 'rgba(0, 0, 0, 0.25)', // Adds a slight text shadow
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
});

export default LandingPage;
