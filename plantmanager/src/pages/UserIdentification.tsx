import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    Alert} from 'react-native';
    import { SafeAreaView } from "react-native-safe-area-context";
    import { useNavigation } from '@react-navigation/core';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import {Button} from '../components/Button';
    import colors from '../styles/colors';
    import fonts from '../styles/fonts';


export function UserIdentification(){
    const [isFocused,setIsFocused] = useState(false)
    const [isFilled,setIsFilled] = useState(false);
    const [name,setName] = useState<string>();
    const navigation = useNavigation();


    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name)
    }
    function handleInputFocus(){
        setIsFocused(true);
    }
    function handleInputChange(value: string){
        setIsFilled(!!value)
        setName(value)
    }
    async function handleStart(){
        if(!name)
            return Alert.alert('Me diz como chamar você 😉')
        //O @ aqui embaixo é só um padrão da string, podia ser chamado so de usuario tudo isso 
        //Aqui é guardar localmente o nome do usuario
        //Como aqui é uma função async, é uma promisse(se vc passar o mouse no setItem), 
        //então podemos colocar um await  na frente para esperar pegar o nome do usuario antes de prosseguir
        //e um async na frente da função
        try{
            await AsyncStorage.setItem('@plantmanager:user',name);
            navigation.navigate('Confirmation');
        } catch{
            Alert.alert('Não foi possivel salvar o seu nome. 😥')
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.header}>
                        <Text style={styles.emoji}>
                            {isFilled ? '😀':'😃'}
                        </Text>
                        <Text style={styles.title}>
                            Como podemos{'\n'} chamar você?
                        </Text>
                        </View>
                    <TextInput 
                    style={[
                        styles.input,
                        (isFocused || isFilled) && {borderColor:colors.green}]}
                    placeholder="Digite um nome"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                    />
                    <View style={styles.footer}>
                        <Button  
                        onPress={handleStart}
                        title="Confirmar"/>
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex:1,
        width: '100%'
    },
    header:{
        alignItems: 'center'
    },
    form: {
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%'
        
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding:10,
        textAlign: 'center'
    },
    title:{
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight:34,
        marginTop: 20
    },
    footer:{
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
})