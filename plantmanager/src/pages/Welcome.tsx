import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {Entypo} from '@expo/vector-icons';

import {Button} from '../components/Button';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie{'\n'} suas plantas de{'\n'} forma facil
                </Text>
            
                <Image 
                    source={wateringImg} 
                    style={styles.image}
                    resizeMode="contain"
                />
            
                <Text style={styles.subtitle}>
                    Não esqueça  mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>
            
                <Button 
                onPress={handleStart}
                title="Continuar"/>

                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1     
    },
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:20
    },
    title:{
        fontSize:28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop:38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal:20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    },
    buttonIcon:{
        fontSize:24,
        color: colors.green
    }

})