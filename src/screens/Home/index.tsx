import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LogoImg from '../../assets/LogoImg.png';


export function Home() {
  const navigation = useNavigation()

  function handleGoPage() {
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
      <Image source={ LogoImg } style={styles.image}/>
      <Text style={styles.title}>CARTEIRA DE TRABALHO DIGITAL</Text>

      <TouchableOpacity style={styles.button} onPress={handleGoPage}>
        <Text style={styles.buttonTitle}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',

    padding: 15,
  },

  image: {
    width: 100,
    height: 100,
  },

  title: {
    marginTop: 15,
    color: '#0033cc',

    marginBottom: 85,
  },

  button: {
    backgroundColor: '#4080bf',
    width: '100%',
    height: 50,

    justifyContent: 'center',
    borderRadius: 5,
  },

  buttonTitle: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  }
});
