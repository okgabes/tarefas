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


export default function Perfil({ navigation }) {


  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(()=>{
    Animated.parallel([
      Animated.spring(offset.y,{
        useNativeDriver: true,
        toValue: 0,
        speed:4,
        bounciness:30
      }),
      Animated.timing(opacity,{
        useNativeDriver: true,
        toValue: 1,
        duration: 500,
      }) 
    ]).start();
    
  },[]);

  function Entrar(){
    return navigation.navigate('TodoApp');
  }
  function NaoEntrar(){
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          source={require('../../assets/logo1.png')}
        />
      </View>

      <Animated.View 
      style={[
        styles.container,
        {
          opacity:opacity,
          transform:[{
            translateY:offset.y
          }]

        }
      ]}
      >
        <TextInput
          style={styles.containerInput}
          placeholder='Email'
          autoCorrect= {false}
          onChangeText={()=>{}}
        />
        <TextInput
          style={styles.containerInput}
          placeholder='Senha'
          autoCorrect= {false}
          onChangeText={()=>{}}
        />
        
        <TouchableOpacity style={styles.containerBtn}>
          <Text style={styles.enviarTexto}
                onPress={()=>{Entrar()}}
          >
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.enviarRegistro}
                onPress={()=>{navigation.navigate('TodoApp')}}
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },containerLogo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50
  },
  containerInput:{
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding:9,
  },containerBtn:{
    backgroundColor:'#35AAF2',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    marginBottom:15,
  },
  enviarTexto:{
    color:'#FFF',
    fontSize: 18
  },
  enviarRegistro:{
   color:'#FFF',
   fontSize: 15
  }
});