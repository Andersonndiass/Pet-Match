
import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  Image,

} from 'react-native';

import mel from '../assets/sprites-mainPage/mel.jpg';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgMel} source={mel} />
      <Button title={"voltar"} onPress={() => navigation.navigate('Main')}/>
      <Text>Fiquei com preguiça de adiconar conteudo aq, em breve vou atualizar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#b6a9cf',
  },
  imgMel:{
    width: '100%',
    height: 300,
    borderRadius: 8,
    paddingTop:10,
    marginBottom: 12,
    resizeMode: 'cover',
  },
});
