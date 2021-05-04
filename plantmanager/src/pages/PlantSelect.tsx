import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
  
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { EnvironmentButton } from '../components/EnvironmentButton';

import {Header} from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header></Header>
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>
                    voce quer colocar sua planta?
                </Text> 
            </View>
            <View>
                <FlatList
                data={[1,2,3,4,5]}
                renderItem={({item})=>(
                    <EnvironmentButton title="cozinha" active></EnvironmentButton>
                )}
                horizontal
                />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
       backgroundColor: colors.background
    },
    header:{
        paddingHorizontal:20
    },
    title:{
        fontSize:17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop:15
    },
    subtitle:{
        fontFamily: fonts.text,
        fontSize:17,
        lineHeight:20,
        color: colors.heading
    }
})