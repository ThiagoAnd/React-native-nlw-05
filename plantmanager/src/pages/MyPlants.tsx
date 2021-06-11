import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import waterdrop from '../assets/waterdrop.png';

import colors from '../styles/colors';
import { FlatList } from 'react-native-gesture-handler';
import { loadPlant, PlantProps } from '../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

export function MyPlants(){
    const [] = useState<PlantProps[]>([]);
    const [loading,setLoading] = useState(true);
    const [nextWaterd,setNextWaterd] = useState<string>();

    useEffect(() =>{
        async function loadStorageData(){
            const plantsStoraged  = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt}
            );

            setNextWaterd(
                `Não esqueça de regar a ${plantsStoraged[0].name} a ${nextTime} horas`
            )
        }

        loadStorageData
    })
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
                <View style={styles.spotlight}>
                    <Image 
                        source={waterdrop}
                        style={styles.spotlightImage}
                    />
                    <Text style={styles.spotlightText}>
                        Teste
                    </Text>
                </View>
                <View style={styles.plants}>
                    <Text style={styles.plantTitle}>
                        Próximas regadas
                    </Text>
                    <FlatList
                        data/>
                </View>
           
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:30,
        paddingTop:50,
        backgroundColor: colors.background
    },
    spotlight:{

    },
    spotlightImage:{

    },
    spotlightText:{},
    plants:{},
    plantTitle:{}
})