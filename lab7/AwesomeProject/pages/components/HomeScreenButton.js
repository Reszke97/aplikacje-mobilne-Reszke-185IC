import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {btn} from '../styles'
import stylesHome from '../styles'

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={stylesHome.button}
      onPress={props.customClick}>
      <Text style={stylesHome.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Mybutton;