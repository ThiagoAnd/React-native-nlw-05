import React from 'react';
import {
    View,
    Text,
    StyleSheet
  
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import {Header} from '../components/Header';
import colors from '../styles/colors';

export function PlantSelect(){
    return (
        <SafeAreaView style={styles.container}>
<View>
            <Header></Header>
            <Text>Selecionar planta</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
      
    }
})