import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({ navigation }) {
    return(
        <View style={{backgroundColor:'#191919', flex:1}}>
            <Text>
                Escolha uma rota
            </Text>
            <Button
                title="Ir para o Login"
                onPress={()=>{navigation.navigate('Login')}}
            />
            <Button
                title="Ir para as Tarefas"
                onPress={()=>{navigation.navigate('TodoApp')}}
            />

            {/*faz a alteração do titulo *
            <Button
                title="Muda Titulo"
                onPress={()=>{navigation.setOptions({title: 'INICIO'})}}
            />

            //Passando parametros
            <Button
                title="Sobre"
                onPress={()=>{navigation.navigate('Sobre',{nome: 'Matheus', idade: 25})}}
            />
            */}
        </View>
    );
}