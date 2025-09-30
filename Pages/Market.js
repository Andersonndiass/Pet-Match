import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';

import chat from '../assets/icon/Main-page/chat.png';
import home from '../assets/icon/Main-page/main.png';
import menu from '../assets/icon/Main-page/menuG.png';
import perfil from '../assets/icon/Main-page/perfil.png';

const posts = [
  {
    id: 1,
    titulo: 'Ração',
    content: 'Ração da melhor QUALIDADE!',
    link: 'https://cobasi.vteximg.com.br/arquivos/ids/939213/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-3kg-lado.jpg?v=638127640834670000',
    preco: 'R$30,00',
  },
  {
    id: 2,
    titulo: 'Casinha',
    content: 'Uma casinha mais confortavel do que essa impossivel.',
    link: 'https://beethovenagropet.com.br/media/catalog/product/cache/51cb7d63d099cb9c2ea8c0b1afe57c81/i/m/img_6056_copiar_1_1_1_1.webp',
    preco: 'R$89,99',
  },
  {
    id: 3,
    titulo: 'Coleira',
    content: 'Melhor coleira do mercado.',
    link: 'https://www.petelegante.com.br/media/catalog/product/cache/c7324ab12751d83f0d1eb575fc175080/c/o/coleira-para-cachorro-courino-matelasse-macio-rosa-pink-metais-niquelados.jpg',
    preco: 'R$25,90',
  },
];

export default function Profile({ navigation }) {
  const [modalOn, setModalOn] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setModalOn(true)}>
            <Image style={{height:30,width:40,marginTop:35,marginBottom:-5,marginLeft:300,}} source={menu} />
          </TouchableOpacity>
        <Text style={styles.titulo}>Market</Text>
        <View style={styles.postsConteudo}>
          {posts.map((post) => (
            <TouchableOpacity
              key={post.id}
              style={styles.post}
              activeOpacity={0.7}>
              <View style={styles.postConteudoConteudo}>
                <Text style={styles.posttitulo}>{post.titulo}</Text>
                <Text style={styles.postConteudo}>{post.content}</Text>
                <Text style={styles.postPreco}>{post.preco}</Text>
              </View>
              <Image source={{ uri: post.link }} style={styles.postImagem} />
            </TouchableOpacity>
          ))}
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

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalOn}
        onRequestClose={() => setModalOn(!modalOn)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Menu</Text>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => setModalOn(false)}>
              <Text style={styles.menuButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuButton: {
    backgroundColor: '#b6a9cf',
    borderRadius: 7,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  menuButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  postsConteudo: {
    flexDirection: 'column',
    width: '100%',
  },
  post: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postConteudoConteudo: {
    flex: 1,
  },
  posttitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postConteudo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  postPreco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postImagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 10,
  },
});
