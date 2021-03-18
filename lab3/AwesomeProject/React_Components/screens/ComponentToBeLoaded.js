import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';
import { ScrollView } from 'react-native-gesture-handler';

export default function ComponentToBeLoaded({length}){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return(
        <ScrollView>
            <Text>{result}</Text>
        </ScrollView>
    )
}