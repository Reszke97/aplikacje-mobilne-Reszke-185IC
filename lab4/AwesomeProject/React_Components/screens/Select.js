import React from "react";
import PropTypes from "prop-types";
import { View, Picker, Text } from "react-native";
import {stylesSelect} from '../static/styles.js';

export default function Select(props) {
  return (
    <View>
      <Text style={stylesSelect.pickerLabel}>{props.label}</Text>
      <Picker {...props}>
        {props.items.map(i => (
          <Picker.Item key={i.label} {...i} />
        ))}
      </Picker>
    </View>
  );
}

Select.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string
};