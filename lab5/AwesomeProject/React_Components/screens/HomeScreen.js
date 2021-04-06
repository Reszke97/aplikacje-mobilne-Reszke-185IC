import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import stylesHome from '../static/styles.js';


export default function HomeScreen({ navigation }) {
    return (
      <View style={stylesHome.containerCol}>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Scroll View 1')}>
          <Text style={stylesHome.text}>Scroll View 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Scroll View 2')}>
          <Text style={stylesHome.text}>Scroll View 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Touchable Opacity & Highlight')}>
          <Text style={stylesHome.text}>Touchable Opacity & Highlight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Swipeable')}>
          <Text style={stylesHome.text}>Swipeable</Text>
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