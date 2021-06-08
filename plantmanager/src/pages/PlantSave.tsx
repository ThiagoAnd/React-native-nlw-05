import React, {  useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity

} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {SvgFromUri} from 'react-native-svg';
import {useRoute} from '@react-navigation/core';
import DateTimePicker,{Event} from '@react-native-community/datetimepicker';

import { Button } from '../components/Button';
import waterdrop from '../assets/waterdrop.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { format, isBefore } from 'date-fns';
import { PlantProps, savePlant,loadPlant } from '../libs/storage';

interface Params{
    plant: PlantProps
}

export function PlantSave(){
    const [selectedateTime,setSelectedDateTime] = useState(new Date());
    //Aqui por padrão , se a plataforma for igual ios o showDatePicker é setado para true
    const [showDatePicker,setShowDatePicker] = useState(Platform.OS == 'ios');
    const route = useRoute();
    const {plant} = route.params as Params;

    function handleChangeTime(event: Event,dateTime: Date | undefined){
        if(Platform.OS == 'android' ){
            setShowDatePicker(oldState => !oldState);
        }
        //Um if para validar a comparação de data, se a data enviada é antiga a uma nova data, ou seja, a data de hoje
        if(dateTime && isBefore(dateTime,new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏰');
        }

        if(dateTime){
            setSelectedDateTime(dateTime);
        }
    }

    function handleOpenDateTipePickerForAndroid(){
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSave(){
      
        try{
            await savePlant({
                ...plant,
                dateTimeNotification: selectedateTime
            })
        } catch{
            Alert.alert('Não foi possivel salvar. 😔')
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                />
                <Text style={styles.plantName}>
                    {plant.name}
                </Text>
                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        {plant.water_tips}
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horario para ser lembrado:
                </Text>
                
                {showDatePicker && (
                <DateTimePicker
                    value={selectedateTime}
                    mode="time"
                    display="spinner"
                    onChange={handleChangeTime}
                />
                )}

                {Platform.OS == 'android' && (
                    <TouchableOpacity 
                        style={styles.dateTimePickerButton}
                        onPress={handleOpenDateTipePickerForAndroid}>
                        <Text style={styles.dateTimePickerText}>
                            {`Mudar ${format(selectedateTime,'HH:mm')}`}
                        </Text>
                    </TouchableOpacity>
                )}
                <Button
                    title="Cadastrar planta"
                    onPress={handleSave}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo:{
        flex:2,
        paddingHorizontal:30,
        paddingVertical:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName:{
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop:15
    },
    plantAbout:{
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize:17,
        marginTop:10
    },
    controller:{
        flex:1,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 70
    },
    tipContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding:20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage:{
        width: 56,
        height: 56
    },
    tipText:{
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel:{
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5,
        marginTop:-60                    
    },
    dateTimePickerText:{
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    },
    dateTimePickerButton:{
        width: '100%',
        alignItems: 'center',
        paddingVertical:10
    }
})