import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

export default function ComponentToBeLoaded(){
    return(
        <ScrollView contentContainerStyle ={{display:'flex',flexDirection:'column',width:'100%'}}>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row'}}>
                <Icon name="md-menu" size = {61} color={'white'}></Icon>
                <Icon name="accessibility-outline"color={'white'} size = {61}></Icon>
                <Icon name="add-outline"color={'white'} size = {61}></Icon>
                <Icon name="add-circle-outline"color={'white'} size = {61}></Icon>
                <Icon name="airplane-outline"color={'white'} size = {61}></Icon>
                <Icon name="alarm-outline"color={'white'} size = {61}></Icon>
                <Icon name="albums-outline"color={'white'} size = {61}></Icon>
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="analytics-outline"color={'white'} size = {56}></Icon>
                <Icon name="aperture-outline"color={'white'} size = {56}></Icon>
                <Icon name="apps-outline"color={'white'} size = {56}></Icon>
                <Icon name="archive-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-back-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-back-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-down-outline"color={'white'} size = {56}></Icon>
                
                
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="arrow-redo-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-redo-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-undo-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-undo-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-up-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-up-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="at-outline"color={'white'} size = {56}></Icon>
                
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="call-outline"color={'white'} size = {56}></Icon>
                <Icon name="bed-outline"color={'white'} size = {56}></Icon>
                <Icon name="basket-outline"color={'white'} size = {56}></Icon>
                <Icon name="basketball-outline"color={'white'} size = {56}></Icon>
                <Icon name="battery-full-outline"color={'white'} size = {56}></Icon>
                <Icon name="battery-dead-outline"color={'white'} size = {56}></Icon>
                <Icon name="battery-charging-outline"color={'white'} size = {56}></Icon>
                
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="bandage-outline"color={'white'} size = {56}></Icon>
                <Icon name="bar-chart-outline"color={'white'} size = {56}></Icon>
                <Icon name="barbell-outline"color={'white'} size = {56}></Icon>
                <Icon name="at-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="attach-outline"color={'white'} size = {56}></Icon>
                <Icon name="backspace-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-forward-circle-outline"color={'white'} size = {56}></Icon>
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="arrow-down-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-forward-outline"color={'white'} size = {56}></Icon>
                <Icon name="alert-outline"color={'white'} size = {56}></Icon>
                <Icon name="alert-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="american-football-outline"color={'white'} size = {56}></Icon>
                <Icon name="cart"color={'white'} size = {56}></Icon>
                <Icon name="calculator"color={'white'} size = {56}></Icon>
            </View>
        </ScrollView>
    )
}