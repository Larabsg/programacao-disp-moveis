import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import Text from '../../../shared/components/text/Text';
import styles from '../../login/styles/login.styles';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const onPress = () => {
        navigation.navigate('HomeStack')
        console.log('Email: ' + email)
        console.log('Senha: ' + senha)
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar
                backgroundColor="#FF5364"
            />
            <View style={styles.containerImage}>
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/apps.png')}
                />
            </View>

            {/* <Text style={styles.title} type='TITLE'>Bem vindo</Text> */}

            <Input style={styles.input} placeholder="Email" onChangeText={setEmail} />
            <Input style={styles.input} secureTextEntry={true} placeholder="Senha" onChangeText={setSenha}/>
            <Button style={styles.button} title="Entrar" backColor='#FF5364' onPress={onPress}/>

            <Text style={styles.text} type='NORMAL'>Cadastre-se</Text>

        </SafeAreaView>
    );
};


export default Login;