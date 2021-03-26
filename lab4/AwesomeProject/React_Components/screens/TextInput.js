import React, {Suspense} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import {stylesTextInput} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';


export default function TextInp() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  const [text, onChangeText] = React.useState("Tekst Startowy");
  const [text2, onChangeText2] = React.useState(null);
  const [text3, onChangeText3] = React.useState("Multi linia");
  const [text4, onChangeText4] = React.useState("Limit tekstu");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={stylesTextInput.container}>
      <TextInput
        style={stylesTextInput.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={stylesTextInput.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="podaj tekst"
      />
      <TextInput
        style={stylesTextInput.input}
        value='nie do zmiany'
      />
      <TextInput
        style={stylesTextInput.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="podaj liczbe"
        keyboardType="numeric"
      />
      <TextInput
        style={stylesTextInput.input}
        multiline={true}
        onChangeText={onChangeText3}
        value={text3}
        numberOfLines={2}
      />
      <TextInput
        style={stylesTextInput.input}
        onChangeText={onChangeText4}
        value={text4}
        maxLength={12}
      />
    </View>
  );
}




