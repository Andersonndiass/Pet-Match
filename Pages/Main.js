import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mspzgrpokjmdmpzvtekp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcHpncnBva2ptZG1wenZ0ZWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNjgyMDksImV4cCI6MjA3NDc0NDIwOX0.NZkRYbELn8OLsovVZnsv1eNphd0nDsSLe5qkTfz8irs';
const supabase = createClient(supabaseUrl, supabaseKey);

import chat from '../assets/icon/Main-page/chat.png';
import home from '../assets/icon/Main-page/main.png';
import menu from '../assets/icon/Main-page/menuG.png';
import perfil from '../assets/icon/Main-page/perfil.png';

import bella from '../assets/pets/bella.png';
import bobby from '../assets/pets/bobby.png';
import falix from '../assets/pets/falix.png';
import lili from '../assets/pets/lili.png';
import max from '../assets/pets/max.png';
import pipoca from '../assets/pets/pipoca.png';
import rodolfo from '../assets/pets/rodolfo.png';
import thor from '../assets/pets/thor.png';

const imageMap = {
  'bella.png': bella,
  'bobby.png': bobby,
  'falix.png': falix,
  'lili.png': lili,
  'max.png': max,
  'pipoca.png': pipoca,
  'rodolfo.png': rodolfo,
  'thor.png': thor,
};

export default function Page({ navigation }) {
  const width = Dimensions.get('window').width;
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    async function carregaDados() {
      const { data, error } = await supabase.from('Pets').select('*');
      if (error) {
        console.error('Erro ao buscar dados:', error);
      } else {
        setDados(data);
      }
    }

    carregaDados();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.postsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('menu')}>
          <Image style={styles.menuIcon} source={menu} />
        </TouchableOpacity>

        <View style={styles.dragHintContainer}>
          <Text style={styles.dragHintText}>Arraste para os lados</Text>
        </View>

        <Carousel
          loop={false}
          width={width}
          height={Dimensions.get('window').height - 180}
          data={dados}
          scrollAnimationDuration={500}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <TouchableOpacity style={styles.post} activeOpacity={0.7}>
                <Text style={styles.postTitle}>{item.title}</Text>
                <Image style={styles.postImage} source={imageMap[item.image.split('/').pop()]}/>

                <View style={styles.infoContainer}>
                  <Text style={styles.infoText}>
                    Idade: <Text style={{ color: 'black' }}>{item.idade}</Text>
                  </Text>
                  <Text style={styles.infoText}>
                    Sexo: <Text style={{ color: 'black' }}>{item.sexo}</Text>
                  </Text>
                  <Text style={styles.infoText}>
                    Cidade: <Text style={{ color: 'black' }}>{item.cidade}</Text>
                  </Text>
                  <Text style={styles.infoText}>
                    Personalidade:{' '}
                    <Text style={{ color: 'black' }}>{item.personalidade}</Text>
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.saibaMaisButton}
                  onPress={() => navigation.navigate(item.post)}>
                  <Text style={styles.saibaMaisText}>SAIBA MAIS</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCB7FA',
  },
  postsContainer: {
    flex: 1,
  },
  menuIcon: {
    height: 30,
    width: 40,
    marginTop: 35,
    marginBottom: -5,
    marginLeft: 300,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  post: {
    backgroundColor: '#BEAAE9',
    borderRadius: 10,
    padding: 19,
    width: 325,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 3,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  postImage: {
    width: 225,
    alignSelf: 'center',
    height: 208,
    borderRadius: 8,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#5935A8',
    marginBottom: 5,
    lineHeight: 22,
  },
  saibaMaisButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  saibaMaisText: {
    fontWeight: 'bold',
    color: '#FFFF66',
  },
  footer: {
    height: 80,
    backgroundColor: '#D9D9D9',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
  iconImage: {
    width: 28,
    height: 28,
  },
  dragHintContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 4,
  },
  dragHintText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
});