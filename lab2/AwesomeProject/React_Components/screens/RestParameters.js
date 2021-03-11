import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';

export default function HomeScreen({ navigation }) {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  return (
    <View style={stylesOtherScreens.containerCol}>
        <View style={stylesOtherScreens.colTextRestParams}>
          <Text style={stylesOtherScreens.textRestParameters}>
          <B>Rest Parameters</B> pozwala funkcji na akceptowanie nieokreślonej liczby argumentów jako tablicy, zapewniając sposób reprezentowania funkcji wariadycznych(czyli o zmiennej liczbie argumentów) w JavaScript.
          </Text>
          <Text style={stylesOtherScreens.textRestParameters}>
            Gdy ostatni parametr w funkcji poprzedzimy zapisem <B>'...'</B> to pozostałe parametry zostaną wpisane do tablicy JS.
          </Text>
          <Text style={stylesOtherScreens.textRestParameters}>
            <B>Przykład</B>
          </Text>
          <Text style={stylesOtherScreens.codeBlockRestParams}>
          {`function fun1(...theArgs) {\n\t`}
          {'console.log(theArgs.length)\n}\n\n'}
          {'fun1()\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\//output 0\n'}
          {'fun1(5)\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//output 1\n'}
          {'fun1(5,6,7)\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\//output 3'}
          </Text>
        </View>
        <View style={stylesOtherScreens.rowNavContainer}>
          <TouchableOpacity style={stylesOtherScreens.rowNav} onPress={() => navigation.navigate('SpreadOperator')}>
              <Text style={stylesOtherScreens.descriptionText}>Spread Syntax</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesOtherScreens.rowNav} onPress={() => navigation.navigate('HookUseState')}>
              <Text style={stylesOtherScreens.descriptionText}>Use State</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}

export const options ={
  title: 'Rest Parameters',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#0892D0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily:'Roboto-Black',
  },
}