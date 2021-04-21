import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {btn} from '../styles'
import stylesHome from '../styles'

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={btn.button}
      onPress={props.customClick}>
      <Text style={btn.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Mybutton;