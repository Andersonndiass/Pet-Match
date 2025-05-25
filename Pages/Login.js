
import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  View,
  Image,
} from 'react-native';
import eyeOn from '../assets/icon/eye-open.png';
import eyeOff from '../assets/icon/eye-closed.png';

export default function App({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Por favor, preencha os campos corretamente');
      return;
    }

    navigation.navigate('Main');
  };

  const togglemostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="senha"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={togglemostrarSenha} style={styles.eyeButton}>
          <Image
            source={mostrarSenha ? eyeOn : eyeOff}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEnviar} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cadastro}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.btnCad}>Não tem conta? Cadastre-se</Text>
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
  
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  passwordInput: {
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
  cadastro: {
    marginTop: 20,
  },
  btnCad: {
    color: '#333333', 
    textAlign: 'center',
    fontSize: 14,
  },
});
