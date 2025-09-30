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

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={back} style={{}} />
        </TouchableOpacity>
        <Text style={styles.titulo}>SEGURANÇA</Text>
        <View style={styles.divS}>
          <Text style={styles.textS}>
            No PetMatch, a segurança dos usuários e dos animais é prioridade. O
            processo de adoção é digital, seguro e transparente, com proteção de
            dados pessoais por criptografia e conformidade com leis de
            privacidade. As informações dos pets são verificadas por ONGs e
            protetores confiáveis, garantindo perfis completos e reais. Todas as
            interações no app são monitoradas e, em caso de comportamento
            suspeito, a equipe atua prontamente. Após a adoção, há
            acompanhamento contínuo para assegurar uma boa adaptação. O PetMatch
            se compromete com o bem-estar e a segurança de todos os envolvidos.
          </Text>
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
    marginBottom: 30,
  },
  backButton: {
    marginTop: 30,
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
  divS: {
    backgroundColor: '#D9D9D9',
    width: 320,
    height: 400,
    marginTop: 40,
    alignSelf: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 60,
  },
  textS: {
    fontSize: 18,
    width: 280,
    marginLeft: 25,
    marginTop: 25,
  },
});
