import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';

export default function HomeScreen({ navigation }) {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'#19A3E1'}}>{props.children}</Text>
  return (
    <View style={stylesOtherScreens.containerCol}>
        <View style={stylesOtherScreens.colTextSpreadOp}>
          <Text style={stylesOtherScreens.textSpreadOp}>
            <B>Spread Syntax</B> to zapis, który umożliwia rozbijanie iterowanej wartości na składowe.
            Może nią być string (bo składa się z poszczególnych liter), może to być tablica (bo składa się z elementów), 
            mogą to być kolekcje (po których bardzo często robiliśmy pętle for) 
            czy nawet obiekty (po których robiliśmy pętle for in), a nawet pojedyncze obiekty.
          </Text>
          <Text style={stylesOtherScreens.textSpreadOp}>
            <B>Przykład</B>
          </Text>
          <Text style={stylesOtherScreens.codeBlockSpreadOp}>
          {`//rozbijanie tablicy \n//na poszczególne liczby\n`}
          {`console.log(...tab);\t\t\t //output 1, 2, 3, 4\n\n`}
          {`//kopiowanie tablicy\n\t`}
          {`const tab2 = [...tab];\n\n`}
          {`//łączenie tablic\n`}
          {`const tabPart = [3, 4]\n`}
          {`const tabFull = [1, 2, ...tabPart, 5, 6];\n`}
          {`//output [1, 2, 3, 4, 5, 6]`}
          </Text>
        </View>
        <View style={stylesOtherScreens.rowNavContainer}>
          <TouchableOpacity style={stylesOtherScreens.rowNav} onPress={() => navigation.navigate('RestParameters')}>
              <Text style={stylesOtherScreens.descriptionText}>Rest Parameters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesOtherScreens.rowNav} onPress={() => navigation.navigate('HookUseState')}>
              <Text style={stylesOtherScreens.descriptionText}>Use State</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}

export const options ={
  title: 'Spread Syntax',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#0892D0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily:'Roboto-Black',
  },
}