import React, {Component, useEffect, useState } from 'react';
import { Button, ScrollView, Text,TextInput, View,TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStor} from '../static/styles.js';

import { useNavigation } from '@react-navigation/native';

const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

export default function ScrollView2(props) {
  const navigation = useNavigation();
  return <AsyncStorageScreen {...props} navigation={navigation} />;
}
class AsyncStorageScreen extends Component {
    constructor(){
        super()
    }
    state = {
        key:'',
        value:'',
        asyncKey:'',
        asyncValue:'',
    }
    storeData = async () => {
        var key = this.state.key
        var value = this.state.value
        try {
            await AsyncStorage.setItem(key,value);
        } catch (error) {
            console.error(error)
        }
    };
    deleteData = async () =>{
        try {
            await AsyncStorage.clear();
            this.setState({
                key:'',
                value:'',
                asyncKey:'',
                asyncValue:''
            })
        } catch (error) {
            console.error(error)
        }
    }

    loadData = async () =>{
        try {
            const keys = await AsyncStorage.getAllKeys();
            const values = await AsyncStorage.multiGet(keys);
            console.log(values)
            this.setState({
                asyncKey: values[0][0],
                asyncValue:values[0][1],
            })
            
        } catch (error) {
            console.error(error)
        }
    }
    render(){ 
        return (
            <>
                <View style={{padding:'2%'}}>
                    <Text style={{textAlign:'justify'}}>
                        Na tym ekranie można zapisać dane lokalnie do AsyncStorage po podaniu klucz i wartości w inputach.
                        Po wpisaniu danych należy dodać wartość za pomocą guzika. Później za pomocą guzika dodaj do tekstu
                        za pomocą funkcji loadData wykorzystującej <B>AsyncStorage.getAllKeys</B> oraz <B>AsyncStorage.multiGet(keys)</B>
                        pobierana jest para <B>klucz i wartość</B> i wczytywana jest do tekstu po kliknięciu guzika 
                        <B>Dodaj do tekstu</B>. Ostatni guzik <B>Usuń</B> czyści zawartość AsyncStorage oraz ekran.
                    </Text>
                </View>
                <ScrollView contentContainerStyle={{flex:1,flexDirection: 'column'}}>
                    <View >
                        <Text style={{padding:'2%',fontSize:20}}><B>Podaj wartość do zapisania</B></Text>
                        <View style={AsyncStor.itemContainer}>
                            <TextInput placeholderTextColor="white" style={AsyncStor.input} onEndEditing={event =>{this.setState({key: event.nativeEvent.text})}} placeholder="Podaj klucz"/>
                        </View>
                        <View style={AsyncStor.itemContainer}>
                            <TextInput placeholderTextColor="white" style={AsyncStor.input} onEndEditing={event =>{this.setState({value: event.nativeEvent.text})}} placeholder="Wpisz wartość" />
                        </View>
                        <View style={{flexDirection:'row',paddingVertical:'2%'}}>
                            <TouchableOpacity onPress={this.storeData} style={AsyncStor.button}>
                                <Text style={AsyncStor.buttonText}>Dodaj wartość</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.loadData} style={AsyncStor.button}>
                                <Text style={AsyncStor.buttonText}>Wyświetl</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.deleteData} style={AsyncStor.button}>
                                <Text style={AsyncStor.buttonText}>Usuń</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={{padding:'2%',fontSize:20,fontFamily:'Roboto-Regular'}}>
                            {this.state.asyncKey}{this.state.asyncValue}
                        </Text>
                    </View>
                </ScrollView>
            </>
        )
    };
}
