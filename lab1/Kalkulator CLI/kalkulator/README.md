# Aplikacja napisana w React-CLI
## Do przygotowania React-CLI wykorzystałem stronę https://reactnative.dev/docs/environment-setup. Dodatkowo zainstalowałem Android Studio do korzystania z emulatora na system android. Po skonfigurowaniu Z dokumentacji react-native należało również doinstalować **Java JDK** oraz podać utowrzyć zmienną środowiskową **JAVA_HOME** zazwyczaj jest to następująca scieżka: **C:\Program Files\Java\jdk-15.0.2**. Oraz dodatkowo https://stackoverflow.com/questions/35000729/android-studio-could-not-initialize-class-org-codehaus-groovy-runtime-invokerhel zmienić opcje w **gradle/wrapper/gradle-wrapper.properties.** na **distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip**.

## Po końcowej konfiguracji przeszedłem do realizacji zadania.

## Tak przedstawia się gotowa aplikacja:
![](1)

## Aplikacje podzieliłem na 2 pliki: **style.js** do stylów oraz **app.js** z całą logiką.

## Tak przedstawia się plik **style.js**:

```React
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
```

