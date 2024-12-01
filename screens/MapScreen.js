import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { vocabularyData } from '../data/vocabularyData';

const areas = [
  { name: 'Shibuya', latitude: 35.659, longitude: 139.7004 },
  { name: 'Ginza', latitude: 35.6717, longitude: 139.7649 },
  { name: 'Akihabara', latitude: 35.6983, longitude: 139.773 },
  { name: 'Shimokitazawa', latitude: 35.6613, longitude: 139.6676 },
];

export default function MapScreen() {
  const navigation = useNavigation();

  const handleMarkerPress = (areaName) => {
    const areaVocabulary = vocabularyData[areaName];
    navigation.navigate('Vocabulary List', { areaName, vocabulary: areaVocabulary });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Japan!</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.6762,
          longitude: 139.6503,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {areas.map((area, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: area.latitude, longitude: area.longitude }}
            title={area.name}
            onPress={() => handleMarkerPress(area.name)}
          >
            {/* Custom marker styling */}
            <View style={styles.marker}>
              <Text style={styles.markerText}>{area.name}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4F0', // Light peach background
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6347', // Vibrant red-orange
    padding: 15,
    textAlign: 'center',
    zIndex: 1, // Ensure the text appears on top
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Subtle overlay
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  map: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden', // Ensures the map fits within rounded corners
  },
  marker: {
    backgroundColor: '#FF6347', // Bright orange-red for the marker
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  markerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for readability
  },
});

