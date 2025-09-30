import React from 'react';
import {
  View,
  Text,
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

import meusDados from '../assets/icon/Menu-page/meusDado.png';
import sobre from '../assets/icon/Menu-page/sobre.png';
import seguranca from '../assets/icon/Menu-page/seguranca.png';
import excluirConta from '../assets/icon/Menu-page/excluirConta.png';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={back} style={{}} />
        </TouchableOpacity>
        <Text style={styles.titulo}>SOBRE</Text>
        <View style={styles.divS}>
          <Text style={styles.textS}>O PetMatch é uma plataforma dedicada a facilitar a adoção responsável de animais. Nossa missão é conectar pessoas que querem oferecer um lar com animais que precisam de cuidado e amor. 
Através do nosso app, você pode encontrar pets para adoção de maneira simples e segura, com perfis completos, fotos e informações sobre saúde, personalidade e necessidades de cada animal.
O processo de adoção é totalmente digital, permitindo que você busque, filtre e adote de forma prática.
 Também oferecemos apoio contínuo com orientações, suporte de ONGs e acompanhamento pós-adoção. No PetMatch, acreditamos que adotar um animal é mais do que encontrar um companheiro; é uma oportunidade de transformar vidas para melhor</Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Main')}>
            <Image style={styles.iconImage} source={home} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Profile')}>
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
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 48,
    textAlign: 'center',
    marginTop: 30,
  },
  backButton:{
    marginTop:30,
    flex:1,
  },
  footer: {
    height: 80,
    backgroundColor: '#D9D9D9',
    justifyContent: 'start',
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
  divS:{
    backgroundColor:'#D9D9D9',
    width:320,
    height:420,
    marginTop:50,
    borderColor:'#000000',
    borderWidth:1,
    justifyContent:'center',
    borderRadius:60,
  },
  textS:{
    fontSize:18,
    width:300,
    marginLeft:25,
  },
});
