import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
  
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { EnvironmentButton } from '../components/EnvironmentButton';

import {Header} from '../components/Header';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentProps{
    key: string;
    title: string;
}

export function PlantSelect(){
    const [environments,setEnvironments] = useState<EnvironmentProps[]>([]);
    useEffect(()=>{
        async function fetchEnvironment(){
            const {data} = await api.get('plants_environments');
            setEnvironments([
                {
                    key:'all',
                    title:'todos'
                },
                ...data
            ]);
        }

        fetchEnvironment();
    },[])
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
                data={environments}
                renderItem={({item})=>(
                    <EnvironmentButton title={item.title} ></EnvironmentButton>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.environmentList}

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
    },
    environmentList:{
        height:40,
        justifyContent: 'center',
        paddingBottom:5,
        marginLeft:32,
        marginVertical:32
    }
})