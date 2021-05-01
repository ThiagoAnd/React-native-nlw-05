import React from 'react';
import {Text,TouchableOpacity,StyleSheet,TouchableOpacityProps} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

//Essa interface é um contrato que obriga a função a receber um parametro
interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({title,...rest}: ButtonProps){

    return(
        <TouchableOpacity style={styles.container} 
        activeOpacity={0.8} 
        {...rest}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    container:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        paddingHorizontal:10
    },

    buttonText:{
        color: colors.white,
        fontSize:16,
        fontFamily: fonts.heading
    }

 

})