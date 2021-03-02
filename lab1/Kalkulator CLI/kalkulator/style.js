import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    calculationText:{
      fontSize: 28,
      color: 'black',
      fontWeight: 'bold'
    },
  
    resultText:{
      fontSize:25,
      color:'black'
    },
  
    result:{
      flex: 2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems:'flex-end'
    },
  
    calculation: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems:'flex-end'
    },
  
    buttons: {
      flexGrow: 7,
      flexDirection: 'row'
    },
  
    numbers: {
      flex: 3,
      backgroundColor: 'white',
      borderStyle:'solid',
      borderColor:'gray',
      borderTopWidth: 2
    },
  
    operations:{
      flex: 1,
      backgroundColor: 'white',
      justifyContent:'space-around',
      alignItems:'center',
      borderStyle:'solid',
      borderColor:'gray',
      borderTopWidth: 2
    },
  
    row:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
  
    btn:{
      flex: 1,
      //centruje po osi X
      alignItems:'center',
      alignSelf:'stretch',
      //centruje po osi Y
      justifyContent:'center',
      color:'red'
      /*borderStyle:'solid',
      borderWidth: 1*/
    },
  
    btnText:{
      fontSize: 30,
    },
  
    orangeText:{
      color:'orange',
      fontSize: 30,
    },
  
  })

export default styles