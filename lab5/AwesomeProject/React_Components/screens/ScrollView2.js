import React, {Component, useState} from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView } from "react-native";
import {ScrollView2Styles, ScrollViewContainerStyles} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';

export default function ScrollView2(props) {
  const navigation = useNavigation();
  return <ScrollViewClass {...props} navigation={navigation} />;
}

export class ScrollViewClass extends Component{
  render(){
    var rows = []
    var randomColor = []
    var randomColor2 = []
    for(let i = 0; i < 20; i++){
      randomColor[i] = (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' ';
      randomColor[i] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' '
      randomColor[i] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      randomColor2[i] = (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' ';
      randomColor2[i] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' '
      randomColor2[i] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      console.log(randomColor)
      rows.push(
        <View style={ScrollView2Styles(randomColor[i]).ParentItem}>
          <View style={ScrollView2Styles(randomColor2[i]).ChildItem}>
          </View>
        </View>
      )
    }
    return (
      <ScrollView contentContainerStyle={ScrollViewContainerStyles.ScrollViewContainer}>
        {rows}
      </ScrollView>
    );
  }
}