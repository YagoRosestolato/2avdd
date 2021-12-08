import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Identique-se no gov.br com:</Text>

      <View style={styles.footer}> 
        <AntDesign name="idcard" size={24} color="#4080bf" />
        <Text style={styles.titleCPF}>Número de CPF</Text>
      </View>

      <Text>Digite seu CPF para criar ou acessar sua conta.gov.br </Text>
      
      <View style={styles.viewForm}>
        <Text style={styles.title}>CPF</Text>

        <TextInput placeholder="Digite seu CPF" style={styles.input}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titleIndicator}>Outras opções de identificação:</Text>


      <TouchableOpacity style={styles.options}>
        <MaterialIcons name="smartphone" size={24} color="#4080bf" />
        <Text style={styles.titleCPF}>Seu banco</Text>
      </ TouchableOpacity>


      <TouchableOpacity style={styles.options}>
        <AntDesign name="cloud" size={24} color="#4080bf" />
        <Text style={styles.titleCPF}>Seu certificado digital em nuvem</Text>
      </ TouchableOpacity>


      <View style={styles.rodapeView}>
      <TouchableOpacity style={styles.rodape}>
         <AntDesign name="infocirlce" size={24} color="#4080bf" />
         <Text style={styles.rodapeTitle}>Entenda a conta gov.br</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    marginTop: 25,
    padding: 15,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  footer: {
    marginTop: 25,
    marginBottom: 15,
    flexDirection: 'row',

    alignItems: 'center',
  },

  titleCPF: {
    marginLeft: 10,
  },

  viewForm: {
    marginTop: 15,
  },

  input: {
    marginTop: 10,
    width: '100%',
    height: 50,

    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,

    paddingLeft: 25,
  },

  button: {
    marginTop: 35,

    backgroundColor: '#4080bf',
    width: '100%',
    height: 50,

    justifyContent: 'center',
    borderRadius: 25,
  },

  buttonTitle: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  titleIndicator: {
    marginTop: 30,
    fontWeight: 'bold',

    paddingBottom: 10,
    borderBottomWidth: 1,
  },

  options: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  rodapeView: {
    marginTop: 250,

    justifyContent: 'center',
    alignItems: 'center',
  },

  rodape: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  rodapeTitle: {
    marginLeft: 10,
    color: '#4080bf'
  },
});