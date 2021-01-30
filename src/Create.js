import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import api from './services/api';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Create() {
  const { navigate } = useNavigation();

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [techs, setTechs] = useState('');

  function handleNavigateToList() {
    navigate('List');
  }

  async function handleAddRepository() {
    await api.post('repositories', {
      title,
      url,
      techs
    });

    alert('Cadastro efetuado com sucesso');

    navigate('List');

  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.top}>
          <Text style={styles.topText}>Criar Projeto</Text>
          <TouchableOpacity onPress={handleNavigateToList}>
            <Icon name="arrow-circle-left" size={40} color="#FFF" style={styles.icon} />
          </TouchableOpacity>
        </View> */}

        <View style={styles.formContainer}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Título: </Text>
            <TextInput
              style={styles.input}
              placeholder="Informe o título"
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Url: </Text>
            <TextInput
              style={styles.input}
              placeholder="Informe o url"
              value={url}
              onChangeText={setUrl}
            />
          </View>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Tecnologia: </Text>
            <TextInput
              style={styles.input}
              placeholder="Informe o tecnologia"
              value={techs}
              onChangeText={setTechs}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleAddRepository}>
            <Text style={styles.btnText}>Cadatrar Projeto</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F9",
    justifyContent: 'center',
  },
  // top: {
  //   height: 80,
  //   flexDirection: "row",
  //   alignItems: 'center',
  //   justifyContent: "space-between",
  //   paddingLeft: 15,
  //   paddingRight: 15,
  // },
  // topText: {
  //   textAlign: 'center',
  //   color: '#FFF',
  //   fontSize: 25,
  //   fontWeight: 'bold'
  // },
  formContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center'
  },
  inputBlock: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
  label: {
    color: '#9E9E9E',
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 50,
    color: '#424242',
    fontSize: 17,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
  },
  btn: {
    width: '100%',
    height: 65,
    backgroundColor: '#23CE6B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20
  },
  btnText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
