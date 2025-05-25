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
} from 'react-native';

import chat from '../assets/icon/Main-page/chat.png';
import home from '../assets/icon/Main-page/home.png';
import menu from '../assets/icon/Main-page/menu.png';
import perfil from '../assets/icon/Main-page/perfil.png';
import mel from '../assets/sprites-mainPage/mel.jpg';

export default function Page({ navigation }) {
  const [modalOn, setModalOn] = useState(false);

  // Dados do post
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Mel',
      image: mel,
      content: 'Uma cachorra linda, muito amável, dócil e MUITO FOFA.',
      date: '06/05/2025',
      post:"Post-1"
    },
    {
      id: 2,
      title: 'Mel',
      image: mel,
      content: 'Uma cachorra linda, muito amável, dócil e MUITO FOFA.',
      date: '06/05/2025',
      post:"Post-2"
    },
    {
      id: 3,
      title: 'Mel',
      image: mel,
      content: 'Uma cachorra linda, muito amável, dócil e MUITO FOFA.',
      date: '06/05/2025',
      post:"Post-3"
    },
  ]);

  return (
    <View style={styles.container}>
      {/* Área de posts com scroll */}
      <View style={styles.postsContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}>
          {posts.map((post) => (
            <TouchableOpacity
              key={post.id}
              style={styles.post}
              onPress={() => navigation.navigate(post.post)}
              activeOpacity={0.7}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Image style={styles.postImage} source={post.image} />
              <Text style={styles.postContent}>{post.content}</Text>
              <Text style={styles.postDate}>{post.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Footer fixo */}
      <View style={styles.footer}>
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton} onPress={null}>
            <Image style={styles.iconImage} source={home} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={null}>
            <Image style={styles.iconImage} source={perfil} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={null}>
            <Image style={styles.iconImage} source={chat} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setModalOn(true)}>
            <Image style={styles.iconImage} source={menu} />
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
    backgroundColor: '#b6a9cf',
  },
  postsContainer: {
    height: windowHeight - 48,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 20, // Espaço extra no final
  },
  post: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 19,
    marginBottom: 15,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: 'cover',
  },
  postContent: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
  postDate: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  footer: {
    height: 80,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
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
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '##ffffffAD',
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
});
