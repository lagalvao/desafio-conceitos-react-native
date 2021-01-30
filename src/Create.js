import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Input
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Create() {
  const { navigate } = useNavigation();

  function handleNavigateToList() {
    navigate('List');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topText}>Criar Projeto</Text>
          <TouchableOpacity onPress={handleNavigateToList}>
            <Icon name="arrow-circle-left" size={40} color="#FFF" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}></Text>

          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  top: {
    height: 80,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
  },
  topText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
});
