import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';

import back from '../assets/icon/back.png';

export default function Profile({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={back} style={{}} />
        </TouchableOpacity>
        <Text style={styles.title}>MEUS DADOS</Text>

        <Text style={styles.textInp}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Escrever algo..."
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.textInp}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Escrever algo..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.textInp}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Escrever algo..."
          value={phone}
          onChangeText={setPhone}
        />
        <Text
          style={{
            marginTop: 40,
            fontSize: 36,
            alignSelf: 'center',
          }}>
          Data do Cadastro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Escrever algo..."
          editable={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCB7FA',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    padding: 10,
    flex: 1,
    marginTop:30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },

  input: {
    flex: 0,
    width: 305,
    height: 76,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 78,
    paddingHorizontal: 20,
    padding: 20,
    fontSize: 15,
    alignSelf:'center',
    color: '#9E9797',
    backgroundColor: '#D9D9D9',
  },
  textInp: {
    marginTop: 20,
    fontSize: 36,
    alignSelf: 'center',
  },
});
