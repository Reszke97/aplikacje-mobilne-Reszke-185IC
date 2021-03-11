import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import stylesHome from '../static/styles.js';


export default function HomeScreen({ navigation }) {
    return (
      <View style={stylesHome.containerCol}>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('RestParameters')}>
          <Text style={stylesHome.text}>Rest Parameters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('SpreadOperator')}>
          <Text style={stylesHome.text}>Spread Syntax</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('HookUseState')}>
          <Text style={stylesHome.text}>Hook UseState</Text>
        </TouchableOpacity>
      </View>
    );
  }

export const options ={
  title: 'Home',
  headerStyle: {
    backgroundColor: 'gray',
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