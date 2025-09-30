import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../assets/logo/9e41774ad4e57ccb0ed52ff6cf487d1526c33cf7.png';

export default function Splash() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {  
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000, 
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate('Login');
        });
      }, 500); 
    }); 
  }, [navigation, fadeAnim]);
 
  return (
    <View style={styles.container}>
      <Animated.Image 
        style={[styles.image, { opacity: fadeAnim }]} 
        source={logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF66',
  }, 
  image: {
    width: 600,
    height: 600,
    resizeMode: 'contain'
  },
});