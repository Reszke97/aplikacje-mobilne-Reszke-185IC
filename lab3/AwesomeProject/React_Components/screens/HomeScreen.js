import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import stylesHome from '../static/styles.js';


export default function HomeScreen({ navigation }) {
    return (
      <View style={stylesHome.containerCol}>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('LazyLoading')}>
          <Text style={stylesHome.text}>Lazy Loading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('SpreadOperator')}>
          <Text style={stylesHome.text}>Step Progress Bars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Sortowanie i Filtrowanie')}>
          <Text style={stylesHome.text}>Sortowanie i Filtrowanie</Text>
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