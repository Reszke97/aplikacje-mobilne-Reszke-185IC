import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import stylesHome from '../static/styles.js';


export default function HomeScreen({ navigation }) {
    return (
      <View style={stylesHome.containerCol}>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('TextInput')}>
          <Text style={stylesHome.text}>TextInput</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Select')}>
          <Text style={stylesHome.text}>Select</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('SwitchComponent')}>
          <Text style={stylesHome.text}>Switch Component</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('DateTime')}>
          <Text style={stylesHome.text}>DateTime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Toast')}>
          <Text style={stylesHome.text}>Toast</Text>
        </TouchableOpacity>
      </View>
    );
  }

export const options ={
  title: 'Home',
  color:'black',
  headerStyle: {
    backgroundColor: '#fa0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: "200",
    fontFamily:'AkayaTelivigala-Regular',
    fontSize: 35,
    alignSelf: 'center',
    paddingTop:15
  },
}