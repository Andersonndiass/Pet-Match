import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

import chat from '../assets/icon/Main-page/chat.png';
import home from '../assets/icon/Main-page/main.png';
import perfil from '../assets/icon/Main-page/perfil.png';
import back from '../assets/icon/back.png';
import img from '../assets/profile/foto-profile-generica.jpg';

export default function Profile({ navigation }) {
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [biografia, setBiografia] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={back} />
        </TouchableOpacity>
        <Image source={img} style={styles.imageG} />
        <Text style={styles.titulo}>Seu Nome</Text>

        <Text style={styles.textInp}>Idade</Text>
        <TextInput
          style={styles.input}
          placeholder="Escrever algo..."
          value={idade}
          onChangeText={setIdade}
        />
        <Text style={styles.textInp}>Genêro</Text>
        <TextInput
          style={styles.input}
          placeholder="Escrever algo..."
          value={genero}
          onChangeText={setGenero}
        />
        <Text style={styles.textInp}>Biografia</Text>
        <TextInput
          style={{
            width: 256,
            height: 144,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingBottom:80,
            fontSize: 16,
            color: '#9E9797',
            backgroundColor: '#D9D9D9',
          }}
          placeholder="Escrever algo..."
          value={biografia}
          onChangeText={setBiografia}
        />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Main')}>
            <Image style={styles.iconImage} source={home} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => null}>
            <Image style={styles.iconImage} source={perfil} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={null}>
            <Image style={styles.iconImage} source={chat} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCB7FA',
  },
  content: {
    flex: 0,
    padding: 20,
  },
  titulo: {
    fontSize: 38,
    marginTop: 10,
    textAlign: 'center',
  },
  footer: {
    height: 80,
    backgroundColor: '#D9D9D9',
    justifyContent: 'start',
  },
  backButton:{
    marginTop:20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    padding: 10,
  },
  iconImage: {
    width: 28,
    height: 28,
  },
  imageG: {
    width: 200,
    height: 200,
    borderRadius: 255,
    left: 50,
  },
  input: {
    flex: 1,
    width: 256,
    height: 56,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    paddingHorizontal: 20,
    padding: 20,
    fontSize: 16,
    color: '#9E9797',
    backgroundColor: '#D9D9D9',
  },
  textInp: {
    marginTop: 10,
    marginLeft: 60,
    fontSize: 24,
  },
});
