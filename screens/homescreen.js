import React, { useState, useEffect } from 'react';
import { StatusBar, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  const loadFonts = async () => {
    await Font.loadAsync({
      '00657': require('./font/00657.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const goToSecondScreen = () => {
    navigation.navigate('Second');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./img/1.png')} style={styles.image} resizeMode="cover" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { marginLeft: 15 }]} onPress={goToSecondScreen}>
          <Text style={[styles.buttonText, fontLoaded && { fontFamily: '00657' }]}>Start</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '25%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
