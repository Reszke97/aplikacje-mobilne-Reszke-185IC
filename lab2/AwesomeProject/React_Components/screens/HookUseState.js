import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';

export default function HomeScreen({ navigation }) {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
    return (
      <View style={stylesOtherScreens.containerCol}>
        <View style={stylesOtherScreens.colTextHookUseState}>
          <Text style={stylesOtherScreens.textHookUseState}>
            Use State hook pozwala nam manipulować stanami w komponencie funkcyjnym.
          </Text>
          <Text style={stylesOtherScreens.textHookUseState}>
            Najpierw podajemy zmienną, która będzie odpowiadać za stan komponentu a następnie podajemy która będzie wywoływać <B>setState </B>
            czyli wywoła funkcję <B>render</B> która w konsekwencji zmieni stan naszego komponentu.
          </Text>
          <Text style={stylesOtherScreens.textHookUseState}>
            <B>Przykład</B>
          </Text>
          <Text style={stylesOtherScreens.codeBlockHookUseState}>
          {`import React, { useState } from 'react';\nfunction Example() {\n\tconst [count, setCount] = useState(0);\n\treturn(\n\t\t`}
          {`<div>\n\t\t\t`}
          {`<p>clicked{count} times</p>\n\t\t\t<button onClick={() => setCount(count + 1)}>`}
          {`\n\t\t\t\t Click me`}
          {`\n\t\t\t</button>\n\t\t`}
          {`</div>`}
          {`\n\t)`}
          {`\n}`}
          </Text>
        </View>
        <View style={stylesOtherScreens.rowNavContainer}>
          <TouchableOpacity style={stylesOtherScreens.rowNav} onPress={() => navigation.navigate('SpreadOperator')}>
              <Text style={stylesOtherScreens.descriptionText}>Spread Syntax</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesOtherScreens.rowNav} onPress={() => navigation.navigate('RestParameters')}>
              <Text style={stylesOtherScreens.descriptionText}>Rest Parameters</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

export const options ={
  title: 'Use State',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#0892D0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily:'Roboto-Black',
  },
}