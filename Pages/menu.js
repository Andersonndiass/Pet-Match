import React, { useState } from 'react'; // Importe useState
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

import CustomAlert from './CustomAlert';

export default function Profile({ navigation }) {
  const [isDeleteAlertVisible, setDeleteAlertVisible] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteAlertVisible(true);
  };

  const confirmDelete = () => {
    console.log("Ação de exclusão de conta confirmada.");
    setDeleteAlertVisible(false);
  };

  const cancelDelete = () => {
    console.log("Exclusão de conta cancelada.");
    setDeleteAlertVisible(false);
  };



  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={back} style={{}} />
        </TouchableOpacity>
        <Text style={styles.titulo}>MENU</Text>
        <View style={styles.lineView} />
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MeusDados')}>
            <Image style={{ marginRight: 15 }} source={meusDados} />
            <Text style={styles.menuText}>meus dados</Text>
          </TouchableOpacity>

          <View style={styles.lineView} />

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Sobre')}>
            <Image style={{ marginRight: 15, height: 60, width: 60 }} source={sobre} />
            <Text style={styles.menuText}>sobre</Text>
          </TouchableOpacity>
          <View style={styles.lineView} />
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Segunranca')}>
            <Image style={{ marginRight: 15, height: 60, width: 60 }} source={seguranca} />
            <Text style={styles.menuText}>segurança</Text>
          </TouchableOpacity>
          <View style={styles.lineView} />
          {/* Botão de Excluir Conta com o CustomAlert */}
          <TouchableOpacity style={styles.menuItem} onPress={handleDeleteAccount}>
            <Image style={{ marginRight: 15, height: 60, width: 60 }} source={excluirConta} />
            <Text style={styles.menuText}>excluir conta</Text>
          </TouchableOpacity>
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

      {/* Renderiza o CustomAlert para exclusão de conta */}
      <CustomAlert
        visible={isDeleteAlertVisible}
        title="Confirmar Exclusão"
        message="Tem certeza que deseja excluir sua conta? Esta ação é irreversível."
        onCancel={cancelDelete}
        onConfirm={confirmDelete}
        confirmButtonText="Excluir"
        cancelButtonText="Cancelar"
        isDestructive={true} // Para usar o estilo de botão vermelho
      />

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
    fontWeight: 'bold',
    marginTop: 52,
    textAlign: 'center',
    marginBottom: 40,
    color: '#000', // Garante que o texto seja visível
  },
  menuContainer: {
    marginTop: 10,
  },
  backButton: {
    marginTop: 40,
    flex: 0,
    alignSelf: 'flex-start', // Garante que o botão volte para a esquerda
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginLeft: 30,
    flex: 0,
  },
  menuText: {
    fontSize: 40,
    color: '#000',
    textTransform: 'capitalize',
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
  lineView: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});