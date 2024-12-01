import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { icons } from '../assets/iconAssets'; // Ensure this points to your correct icons file

export default function VocabularyModal({ route }) {
  const { areaName, vocabulary } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vocabulary for {areaName}</Text>
      <FlatList
        data={vocabulary}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const icon = icons[item.word];

          return (
            <View style={styles.card}>
              {icon ? (
                <Image source={icon} style={styles.icon} />
              ) : (
                <View style={styles.iconFallback} />
              )}
              <View style={styles.textContainer}>
                <Text style={styles.word}>{item.word}</Text>
                <Text style={styles.meaning}>{item.meaning}</Text>
                <Text style={styles.pronunciation}>Pronunciation: {item.pronunciation}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', // Light background to highlight pastel tones
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F49AC2', // Soft pastel pink for the title
    marginBottom: 24,
    textAlign: 'center',
    // textTransform: 'uppercase',
    letterSpacing: 2,
   
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginVertical: 12,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 8,
    borderLeftColor: '#A8E6CF', // Pastel green for a vibrant border
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#FF6F61', // Pastel pink for icon border
  },
  iconFallback: {
    width: 50,
    height: 50,
    marginRight: 16,
    backgroundColor: '#FFCDD2', // Light pink for missing icons
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  word: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333', // Dark black for words to ensure readability
  },
  meaning: {
    fontSize: 16,
    color: '#A8E6CF', // Soft pastel green for meaning text
    marginTop: 6,
  },
  pronunciation: {
    fontSize: 14,
    color: '#FF6F61', // Pastel pink for pronunciation
    fontStyle: 'italic',
    marginTop: 4,
  },
});

