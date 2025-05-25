import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, TextInput, Alert, Image, View } from 'react-native';

import back from '../assets/icon/angulo-pequeno-esquerdo.png';
import eyeOn from '../assets/icon/eye-open.png';
import eyeOff from '../assets/icon/eye-closed.png';

export default function App({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaCon, setSenhaCon] = useState('');
  const [nome, setNome] = useState('');
  const [sobre, setSobre] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); 
  const [mostrarSenhaCon, setMostrarSenhaCon] = useState(false); 

  const handleLogin = () => {
    if (!email || !senha || !nome || !sobre || !senhaCon) {
      Alert.alert('Por favor, preencha os campos corretamente');  
      return;  
    }
    if (senha !== senhaCon) {
      Alert.alert('As senhas não correspondem');
      return;
    }

    navigation.navigate('Login');
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const toggleMostrarSenhaCon = () => {
    setMostrarSenhaCon(!mostrarSenhaCon);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imgB} onPress={() => navigation.navigate('Login')}>
        <Image style={styles.img} source={back} />
      </TouchableOpacity>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome" 
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobre}
        onChangeText={setSobre}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.senhaContainer}>
        <TextInput
          style={styles.senhaInput}
          placeholder="Senha"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={toggleMostrarSenha} style={styles.eyeButton}>
          <Image
            source={mostrarSenha ? eyeOn : eyeOff}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.senhaContainer}>
        <TextInput
          style={styles.senhaInput}
          placeholder="Confirme sua senha"
          secureTextEntry={!mostrarSenhaCon}
          value={senhaCon}
          onChangeText={setSenhaCon}
        />
        <TouchableOpacity onPress={toggleMostrarSenhaCon} style={styles.eyeButton}>
          <Image
            source={mostrarSenhaCon ? eyeOn : eyeOff}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEnviar} onPress={handleLogin}>
        <Text style={styles.btnText}>Enviar</Text>                                   
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b6a9cf',
    padding: 20,
  },
  img: {
    width: 40,
    height: 40,
  },
  imgB: {
    bottom: 90,
    right: 160,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  senhaInput: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: '#d0c4e6',
    borderRadius: 100,
    paddingHorizontal: 15,
    color: '#999',
    backgroundColor: '#f5f5f5',
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 2,
    borderColor: '#d0c4e6',
    borderRadius: 100,
    paddingHorizontal: 15,
    color: '#999',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  btnEnviar: {
    backgroundColor: '#000',
    borderRadius: 100,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});