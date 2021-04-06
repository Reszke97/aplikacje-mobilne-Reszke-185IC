import React, { useState } from "react";
import { View, Switch, StyleSheet,Modal,Pressable,Text, Touchable, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native";
import {ScrollViewContainerStyles} from '../static/styles.js';

export default function SwitchComponent() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  const [color, setColor] = useState({backgroundColor:'white'});
  const [text, setText] = useState(null);
  const [randomized, setRandomized] = useState('');
  const [textColor, setTextColor] = useState('black');
  function onClickChangeBgColor(){
    let randomColor = []
    randomColor[0] = (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' ';
    randomColor[0] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' '
    randomColor[0] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
    setColor({backgroundColor:`rgb(${randomColor[0]})`})
  }

  function onClickChangeColor(){
    let randomColor = []
    randomColor[0] = (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' ';
    randomColor[0] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' '
    randomColor[0] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
    setTextColor({color:`rgb(${randomColor[0]})`})
  }

  function onClickPush(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let length;
    length = 200;
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setText(text+result)
    if(randomized=='')setRandomized('Randmized Text')
  }
  if(text==null){
    return (
      <ScrollView contentContainerStyle={[color,ScrollViewContainerStyles.ScrollViewContainer]}>
        <Text style={[textColor,ScrollViewContainerStyles.paddingTop]}><B>Lorem Ipsum</B></Text>
        <Text style={[textColor,ScrollViewContainerStyles.Padding]}>
          Pellentesque feugiat maximus magna, 
          et finibus mi efficitur sed. Mauris mauris quam, vestibulum eu magna a, 
          varius blandit ligula. Donec eleifend finibus tortor, ac mollis arcu fermentum at. 
          Donec aliquam eros metus, eget volutpat lacus pretium condimentum. Vivamus dolor erat, 
          iaculis in mollis nec, imperdiet quis velit. Etiam eu aliquam turpis. Sed sed dignissim diam. 
          Mauris nec dolor est. Sed hendrerit molestie mauris, vitae lobortis felis fringilla eget. 
          Sed eget ipsum posuere, bibendum lorem sed, ultricies turpis. Ut tempus mauris id orci ultrices, 
          vel ornare nulla ullamcorper. Ut posuere pellentesque pulvinar.
        </Text>
        <Text style={ScrollViewContainerStyles.headerText}><B>Opis Ekranu</B></Text>
        <Text style={[textColor, ScrollViewContainerStyles.Padding]}>
          Stworzone zostały 3 komponenty:{`\n`}
          2 komponenty TouchableHighlight 1 do zmiany koloru czcionki 2 do dodawania bloku tekstu.{`\n`}
          1 komponent TouchableOpacity służący do zmiany koloru tła
        </Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={onClickChangeBgColor} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Zmien kolor Tła</B></Text>
          </TouchableOpacity>
          <TouchableHighlight onPress={onClickPush} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Nowy blok Tekstu</B></Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={onClickChangeColor} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Zmien kolor tekstu</B></Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
  else{
    return(
      <ScrollView contentContainerStyle={[color,ScrollViewContainerStyles.ScrollViewContainer]}>
        <Text style={[textColor,ScrollViewContainerStyles.paddingTop]}><B>Lorem Ipsum</B></Text>
        <Text style={[textColor,ScrollViewContainerStyles.Padding]}>
          Pellentesque feugiat maximus magna, 
          et finibus mi efficitur sed. Mauris mauris quam, vestibulum eu magna a, 
          varius blandit ligula. Donec eleifend finibus tortor, ac mollis arcu fermentum at. 
          Donec aliquam eros metus, eget volutpat lacus pretium condimentum. Vivamus dolor erat, 
          iaculis in mollis nec, imperdiet quis velit. Etiam eu aliquam turpis. Sed sed dignissim diam. 
          Mauris nec dolor est. Sed hendrerit molestie mauris, vitae lobortis felis fringilla eget. 
          Sed eget ipsum posuere, bibendum lorem sed, ultricies turpis. Ut tempus mauris id orci ultrices, 
          vel ornare nulla ullamcorper. Ut posuere pellentesque pulvinar.
        </Text>
        <Text style={ScrollViewContainerStyles.headerText}><B>Opis Ekranu</B></Text>
        <Text style={[textColor, ScrollViewContainerStyles.Padding]}>
          Stworzone zostały 3 komponenty:{`\n`}
          2 komponenty TouchableHighlight 1 do zmiany koloru czcionki 2 do dodawania bloku tekstu.{`\n`}
          1 komponent TouchableOpacity służący do zmiany koloru tła
        </Text>
        <Text style={ScrollViewContainerStyles.headerText}>
          <B>{randomized}</B>
        </Text>
        <Text style={[textColor, ScrollViewContainerStyles.Padding]}>
          {text}
        </Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={onClickChangeBgColor} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Zmien kolor Tła</B></Text>
          </TouchableOpacity>
          <TouchableHighlight onPress={onClickPush} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Nowy blok Tekstu</B></Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={onClickChangeColor} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Zmien kolor tekstu</B></Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
};