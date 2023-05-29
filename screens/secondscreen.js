import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const cardImages = [
  require('./img/empty.png'),
  require('./img/card1.png'),
  require('./img/card2.png'),
  require('./img/card3.png'),
  require('./img/card4.png'),
  require('./img/card5.png'),
  // Add more card images as needed
];

export default function SecondScreen() {
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffled = cardImages.slice(1); // Exclude the first "empty.png" from shuffling
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledCards([cardImages[0], ...shuffled]);
  };

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const onPressCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const resetDeck = () => {
    setCurrentCardIndex(0);
    shuffleCards();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background.png')} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.header}>
          <Image source={require('./img/header.png')} style={styles.headerImage} resizeMode="contain" />
        </View>
        <TouchableOpacity style={styles.card} onPress={onPressCard}>
          <Image source={shuffledCards[currentCardIndex]} style={styles.cardImage} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.refreshButton} onPress={resetDeck}>
          <Image source={require('./img/beer.png')} style={styles.refreshIcon} resizeMode="contain" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: '90%',
    height: '200%',
  },
  refreshButton: {
    position: 'absolute',
    bottom: 20,
    right: -25,
  },
  refreshIcon: {
    resizeMode: 'contain',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    height: 700,
    width: 500,
    top: 40,
  },
});
