import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
  
} from 'react-native';
import {RectButton,RectButtonProps} from 'react-native-gesture-handler';

import userImg from '../assets/fotoThiago.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

//o ? na variavel, diz que o argumento não é obrigatorio
interface EnvironmentButtonProps extends RectButtonProps{
    title:string;
    active?: boolean;

}

export function EnvironmentButton({
title,
active=false,
...rest

}: EnvironmentButtonProps){
    
    return (
       <RectButton
        style={[
            styles.container,
            active && styles.containerActive    
        ]}
        {...rest}
       >
           <Text style={[
               styles.text,
               active && styles.textActive
               ]}>
               {title}
           </Text>
       </RectButton>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.shape,
        height:40,
        width:76,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    containerActive:{
        backgroundColor: colors.green_light
    },
    text:{
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive:{
        fontFamily: fonts.heading,
        color: colors.green_dark
    }
})