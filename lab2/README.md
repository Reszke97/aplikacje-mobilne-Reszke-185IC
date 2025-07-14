# Lab 2 – Responsive layouts + navigation.
## Źródło
https://zacniewski.github.io/old/tasks-mobile-apps-react-native/

## Utworzyłem 4 ekrany Przy pomocy **React Navigation** + **Stack Navigation** o nazwie:

- HomeScreen
- RestParameters
- SpreadOperator
- HookUseState

## Program podzieliłem na komponenty. W pliku App.js znajduję się kontener **NavigationContainer** a w nim znajduję się funkcja **StackScreen**, która odpowiada za nawigację pomiędzy ekranami (jest tam zawarty StackNavigator). W folderze **React_Components** znajduję sie podfolder **screens** w którym zdefiniowane są widoki dla ekranów oraz pod folder **static**, w którym utworzyłem plik **styles.js**. 

## Dodatkowo zaimportowałem customowe Fonty. W tym celu utworzyłem w głównym folderze aplikacji folder **assets** a w nim podfolder **fonts** i tam wrzuciłem wszystkie czcionki. Następnie należało dodać dodane przeze mnie czcionki do bibliotek React-Native za pomocą polecenia ```js npx react-native link```. Po czym należy ponownie uruchomić aplikacje.

## Tak przedstawia się Komponent **App.js** :
```js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './React_Components/screens/StackScreen.js';
import {options as optionsHome} from './React_Components/screens/HomeScreen.js';
import {options as optionsUseState} from './React_Components/screens/HookUseState.js';
import {options as optionsRestParameters} from './React_Components/screens/RestParameters.js';
import {options as optionsSpreadOperator} from './React_Components/screens/SpreadOperator.js';

function App() {
  return (
    // Tutaj defniujemy Navigation Container czyli w tym miejscu mówimy naszej apce o istnieniu naszych komponentów
    <NavigationContainer>
      //przekazuje style dla headera ze stack navigator do funkcji StackScreen w postaci obiektu
      <StackScreen 
        options={{
          optionsHome,
          optionsUseState,
          optionsRestParameters,
          optionsSpreadOperator
        }}
      >
      </StackScreen>
    </NavigationContainer>
  );
}
export default App;
```

## Tak przedstawia się Komponent **StackScreen** odpowiadający za nawigacje:
```js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js'
import RestParameters from './RestParameters.js'
import HookUseState from './HookUseState.js'
import SpreadOperator from './SpreadOperator.js'

const Stack = createStackNavigator();

// Jako ekarn startowy mojej apki definiuje ekran "HomeScreen". Z tego ekranu będzie można dotrzeć do 3 innych ekranów.
// funkcja przyjmuje parametr props w postaci obiektu do opcji do StackScreen
function StackScreen({options}) {
    return(
      // ustawiam initialRouteName na HomeScreen czyli tutaj apka będzie się rozpoczynać na tym widoku
      <Stack.Navigator initialRouteName="HomeScreen"> 
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={options.optionsHome}
        />
        <Stack.Screen 
          name="RestParameters" 
          component={RestParameters}
          options={options.optionsRestParameters}
        />
        <Stack.Screen 
          name="SpreadOperator" 
          component={SpreadOperator}
          options={options.optionsSpreadOperator}
        />
        <Stack.Screen 
            name="HookUseState" 
            component={HookUseState}
            options={options.optionsUseState}
        />
      </Stack.Navigator>
    )
    
}

export default StackScreen
```

## Tak przedstawia się Komponenet startowy aplikacji **HomeScreen**:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import stylesHome from '../static/styles.js';

// do funkcji w propsie przekazany obiekt 
export default function HomeScreen({ navigation }) {
    return (
          // we View przekazuje do stylów gotowy zaimportowany obiekt z pliku styles.js
      <View style={stylesHome.containerCol}>
          // W parametrze onPress za pomocą propu navigation.navigate dostępnego w ReactNavigate możemy podać dokąd po kliknięciu
          // w guzik ma nas zabrać i podajemy ten sam name zdefiniowany za pomocą Stack.Screen (Stack = createStackNavigator());
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

//Exportowanie specjalnych stylów stack navigation header
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
```
## Tak przedstawia się komponent Style.js:

```js
import {StyleSheet} from 'react-native';

// Tutaj tworze style dla widoku HomeScreen
const stylesHome = StyleSheet.create({
    containerCol: {
      flex: 1,
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'column',
      backgroundColor:'white',
      color:'black',
    },

    colItems:{
        //alignSelf:'stretch',
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        height:120,
        backgroundColor:'gray',
    },

    text:{
      color:'white',
      fontSize:25,
      fontFamily:'AkayaTelivigala-Regular', // zaimportowałem custom'owe czcionki z google Fonts
    }
})

                                          // Tutaj tworze style dla pozostałych widoków
                                          //Niektóre ze stylów są takie same dla wszystkich komponentów te które nie są, 
                                          //mają w nazwie nazwe komponentu, do którego należą.
export const stylesOtherScreens = StyleSheet.create({
  containerCol: {
    flex: 1,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'white',
    color:'black',
    paddingTop:'5%'
  },

  /*Style dla widoku HookUseState*/                                             
  colTextHookUseState:{
      width:'90%',
      alignItems:'center',
      //justifyContent:'center',
      backgroundColor:'#0892D0',
      flex:8,
  },

  /*Style dla wiodku RestParameters*/
  colTextRestParams:{
    width:'90%',
    alignItems:'center',
    flex:8,
    borderWidth:2,
    borderColor:'#0892D0',
    borderRadius:20
  },
  /*Style dla widoku SpreadOperator*/
  textSpreadOp:{
    marginHorizontal:'5%',
    marginTop:'2.5%',
    fontSize:17,
    fontFamily:'Roboto-Medium',
    color:'white',
  },

   /*Style dla widoku SpreadOperator*/
  colTextSpreadOp:{
    width:'90%',
    alignItems:'center',
    flex:8,
    backgroundColor:'black'
  },
   
  /*Style dla widoku SpreadOperator*/
  codeBlockSpreadOp:{
    marginHorizontal:'5%',
    paddingHorizontal:'5%',
    paddingVertical:'2.5%',
    marginTop:'2.5%',
    fontSize:14,
    fontFamily:'SourceSerifPro-Regular',
    color:'white',
    backgroundColor:'#0892D0',
    borderColor:'gray',
    borderRadius:30
  },
  
   /*Style dla wiodku RestParameters*/
  textRestParameters:{
    marginHorizontal:'5%',
    marginTop:'2.5%',
    fontSize:17,
    fontFamily:'Roboto-Medium',
    color:'black',
  },
  
   /*Style dla wiodku HookUseState*/
  textHookUseState:{
    marginHorizontal:'5%',
    marginTop:'2.5%',
    fontSize:17,
    fontFamily:'Roboto-Medium',
    color:'white',
  },

  /*Style dla wiodku HookUseState*/
  codeBlockHookUseState:{
    marginHorizontal:'5%',
    paddingHorizontal:'5%',
    paddingVertical:'2.5%',
    marginTop:'2.5%',
    fontSize:13,
    fontFamily:'SourceSerifPro-Regular',
    color:'white',
    backgroundColor:'gray',
    borderColor:'gray'
  },

  /*Style dla wiodku RestParameters*/
  codeBlockRestParams:{
    marginHorizontal:'5%',
    paddingHorizontal:'5%',
    paddingVertical:'2.5%',
    marginTop:'2.5%',
    fontSize:20.5,
    fontFamily:'SourceSerifPro-Regular',
    color:'white',
    backgroundColor:'gray',
    borderColor:'gray'
  },

  descriptionText:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    color:'white',
    fontSize:20,
    fontFamily:'AkayaTelivigala-Regular',
  },

  rowNavContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:2,
  },

  rowNav:{
    width:'40%',
    marginHorizontal:'5%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0892D0',
    height:80,
  }
})
export default stylesHome
```

## Tak przedstawia się komponent HookUseState:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';

                // Generalnie każdy z kompunentów ma taką samą strukturę tj.
                // Główny View ustalony na flex direction column z parametrami
                // justifyContent:'space-around',alignItems:'center', flexDirection:'column',
                // tak aby elementy wewnątrz były wycentrowane oraz była między nimi przerwa
                // Następnie tworze dwa widoki. Pierwszy ustawiony jest na 80% kontenera i wyświetlany za pomocą
                // flex direction column.Wewnątrz niego znajduję się blok tekstu, który wyświetla się jako 
                // kod na ekranie i jest jakby osobnym blokiem.
                // Drugi ustawiony na 20% ekranu i wyświetlany za pomocą flex direction row. A wnim są buttony nawigacyjne
export default function HookUseState({ navigation }) {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
    return (
      <View style={stylesOtherScreens.containerCol}>
        <View style={stylesOtherScreens.colTextHookUseState}>
          <Text style={stylesOtherScreens.textHookUseState}>
            Use State hook pozwala nam manipulować stanami w komponencie funkcyjnym.
          </Text>
          <Text style={stylesOtherScreens.textHookUseState}>
            Najpierw podajemy zmienną, która będzie odpowiadać za stan komponentu a 
            następnie podajemy która będzie wywoływać <B>setState </B>
            czyli wywoła funkcję <B>render</B> która w konsekwencji 
            zmieni stan naszego komponentu.
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
```

## Tak przedstawia się komponent **Rest Parameters**:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';

export default function RestParameters({ navigation }) {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  return (
    <View style={stylesOtherScreens.containerCol}>
        <View style={stylesOtherScreens.colTextRestParams}>
          <Text style={stylesOtherScreens.textRestParameters}>
          <B>Rest Parameters</B> pozwala funkcji na akceptowanie nieokreślonej liczby argumentów jako tablicy, 
          zapewniając sposób reprezentowania funkcji wariadycznych(czyli o zmiennej liczbie argumentów) w JavaScript.
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
```

## Tak przedstawia się komponent **SpreadOperator**:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';

export default function SpreadOperator({ navigation }) {
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
```

## Widok HomeScreen:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab2/zrzuty/1.PNG)

## Widok SpreadOperator:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab2/zrzuty/3.PNG)

## Widok RestParameters:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab2/zrzuty/2.PNG)

## Widok HookUseState:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab2/zrzuty/4.PNG)
