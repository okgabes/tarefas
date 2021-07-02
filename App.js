{/*
    Trabalho Final de ProgMov 2021/1
  Feito por:
  Lariane Monari Gonçalves github: @larianemonari
  Gabriel Fernando Teixeira github: @okgabes

  Nossa aplicação tem por objetivo criar uma lista de tarefas de facil ultilzação.
  Permite o usuario criar e apagar os itens da lista de tarefas de maneira bem simples.
  Aplicativo pensado para quando temos que ir ao supermercado, precisamos fazer uma lista
e nao temos por perto caneta e papel e apenas queremos fazer algumas anotações
  

*/}

import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Image, TextInput, 
  TouchableOpacity, 
  Animated,
  Keyboard 
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/components/Login/index';
import Home from './src/components/Home/Home';
import TodoApp from './src/components/TodoApp/index';
//aqui pode se criar a navegação
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name = "Login" component={Login}/>
      <Tab.Screen name = "TodoApp" component={TodoApp}/>
    </Tab.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title:'TAREFAS APP',
          headerStyle:{
            backgroundColor:'#FFF'
          },
          headerTintColor:'#191919'
        }}
        />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="TodoApp" component={TodoApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


