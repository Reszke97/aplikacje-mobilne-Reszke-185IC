# Aplikacje mobilne React-Native
## Lab. nr 5 - obsługa gestów użytkownika

## Utworzyłem w sumie 5 ekranów:
- HomeScreen
- ScrollView1
- ScrollView2
- OpacityHighlight
- Swipeable

Struktura plików:
```js
  ./React_Components
    ├── /screens
    │     ├── HomeScreen.js                   //Plik bazowy
    │     ├── OpacityHighlight                //Plik z komponentem TouchableOpacity oraz TouchableHighlight
    │     ├── ScrollView1.js                  //Ekran z pierwszym Scroll View
    │     ├── ScrollView2.js                  //Ekran z drugim Scroll View
    │     ├── StackScreen.js                  //Komponent do umożliwiający przechodzenie pomiędzy ekranami
    │     ├── Swipeable.js                    //Plik umożliwiający przesuwanie między komponentami
    |     └── StackNavRightHeader             //style dla headera ze stack navigation
    └── /static
          └── styles.js                       //style apki
   app.js
```

# Kody:

## Tak przedstawiają się style aplikacji:
```css
import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

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
        borderRadius:200,
        justifyContent:'center',
        height:100,
        backgroundColor:'#fa0',
    },

    text:{
      color:'white',
      fontSize:25,
      fontFamily:'AkayaTelivigala-Regular',
    }
})

export const ScrollView2Styles = (props)=> StyleSheet.create({
  ParentItem:{
    height:100,
    width:'90%',
    backgroundColor:`rgb(${props})`,
    alignItems:'center',
    justifyContent:'center'
  },

  ChildItem:{
    height:50,
    width:'50%',
    backgroundColor:`rgb(${props})`,
  }
});

export const ScrollViewContainerStyles = StyleSheet.create({
  ScrollViewContainer:{
    alignContent:'center',
    flexDirection: 'column',
    display:'flex',
    alignItems:'center',
  },

  Padding:{
    padding:'3.5%',
    fontFamily:'AkayaTelivigala-Regular',
    fontSize:18,
    textAlign:'justify',
  },

  PaddingLowerFontSize:{
    padding:'3.5%',
    fontFamily:'AkayaTelivigala-Regular',
    fontSize:16,
    textAlign:'justify',
  },

  paddingTop:{
    paddingTop:'2%',
    fontFamily:'Roboto-Regular',
    fontSize:22,
  },

  headerText:{
    fontFamily:'Roboto-Regular',
    fontSize:22,
  },

  buttons:{
    marginBottom:'3%',
    paddingHorizontal:'1.5%',
    marginHorizontal:'1%',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderRadius:20,

  },

  fontFamily:{
    fontFamily:'SourceSerifPro-Regular',
  },
})

export const SwiperinoStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
});

export default stylesHome
```

## Tak przedstawia się plik App.js:
```js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './React_Components/screens/StackScreen.js';
import {options as optionsHome} from './React_Components/screens/HomeScreen.js';

function App() {
  return (
    // Tutaj defniujemy Navigation Container czyli w tym miejscu mówimy naszej apce o istnieniu naszych komponentów
    <NavigationContainer>
      <StackScreen 
        options={{
          optionsHome,
        }}
      >
      </StackScreen>
    </NavigationContainer>
  );
}
export default App;
```

## Tak przedstawia się plik StackScreen.js:
```js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js'
import ScrollView1 from './ScrollView1.js'
import OpacityHighlight from './OpacityHighlight.js'
import ScrollView2 from './ScrollView2.js'
import optionsStack from './StackNavRightHeader.js'
import Swipeable from './Swipeable.js'

const Stack = createStackNavigator();

// Jako ekarn startowy naszej apki definiuje ekran "Home". Z tego ekranu będzie można dotrzeć do 3 innych ekranów.
function StackScreen({options}) {
    return(
      <Stack.Navigator initialRouteName="HomeScreen" >
        <Stack.Screen
          name="HomeScreen" 
          component={HomeScreen}
          options={options.optionsHome}
        />
        <Stack.Screen 
          name="Scroll View 1" 
          component={ScrollView1}
          options = {optionsStack}
        />
        <Stack.Screen 
          name="Scroll View 2" 
          component={ScrollView2}
          options={optionsStack}
        />
        <Stack.Screen 
            name="Touchable Opacity & Highlight"
            component={OpacityHighlight}
            options={optionsStack}
        />
        <Stack.Screen 
            name="Swipeable" 
            component={Swipeable}
            options={optionsStack}
        />
      </Stack.Navigator>
    )
    
}

export default StackScreen
```

## Tak przedstawia się plik StackNavRightHeader:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
export default({navigation}) => ({ // get reference to navigation
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#0892D0',
    },
    headerRightContainerStyle:{
        marginHorizontal:10,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily:'Roboto-Black',
    },
    headerRight: () => (
        <Button transparent
            onPress={() => navigation.navigate('HomeScreen')}
            title="Home"
            //color="#fff"
        />
    )
})
```

## Tak przedstawia się plik OpacityHighlight:
```js
import React, { useState } from "react";
import { View, Switch, StyleSheet,Modal,Pressable,Text, Touchable, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native";
import {ScrollViewContainerStyles} from '../static/styles.js';

export default function SwitchComponent() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  const [color, setColor] = useState({backgroundColor:'white'});
  const [text, setText] = useState(null);
  const [randomized, setRandomized] = useState('');
  const [textColor, setTextColor] = useState('black');
  function onClickChangeBgColor(){
    let randomColor = []
    randomColor[0] = (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' ';
    randomColor[0] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' '
    randomColor[0] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
    setColor({backgroundColor:`rgb(${randomColor[0]})`})
  }

  function onClickChangeColor(){
    let randomColor = []
    randomColor[0] = (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' ';
    randomColor[0] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' '
    randomColor[0] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
    setTextColor({color:`rgb(${randomColor[0]})`})
  }

  function onClickPush(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let length;
    length = 200;
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setText(text+result)
    if(randomized=='')setRandomized('Randmized Text')
  }
  if(text==null){
    return (
      <ScrollView contentContainerStyle={[color,ScrollViewContainerStyles.ScrollViewContainer]}>
        <Text style={[textColor,ScrollViewContainerStyles.paddingTop]}><B>Lorem Ipsum</B></Text>
        <Text style={[textColor,ScrollViewContainerStyles.Padding]}>
          Pellentesque feugiat maximus magna, 
          et finibus mi efficitur sed. Mauris mauris quam, vestibulum eu magna a, 
          varius blandit ligula. Donec eleifend finibus tortor, ac mollis arcu fermentum at. 
          Donec aliquam eros metus, eget volutpat lacus pretium condimentum. Vivamus dolor erat, 
          iaculis in mollis nec, imperdiet quis velit. Etiam eu aliquam turpis. Sed sed dignissim diam. 
          Mauris nec dolor est. Sed hendrerit molestie mauris, vitae lobortis felis fringilla eget. 
          Sed eget ipsum posuere, bibendum lorem sed, ultricies turpis. Ut tempus mauris id orci ultrices, 
          vel ornare nulla ullamcorper. Ut posuere pellentesque pulvinar.
        </Text>
        <Text style={ScrollViewContainerStyles.headerText}><B>Opis Ekranu</B></Text>
        <Text style={[textColor, ScrollViewContainerStyles.Padding]}>
          Stworzone zostały 3 komponenty:{`\n`}
          2 komponenty TouchableHighlight 1 do zmiany koloru czcionki 2 do dodawania bloku tekstu.{`\n`}
          1 komponent TouchableOpacity służący do zmiany koloru tła
        </Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={onClickChangeBgColor} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Zmien kolor Tła</B></Text>
          </TouchableOpacity>
          <TouchableHighlight onPress={onClickPush} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Nowy blok Tekstu</B></Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={onClickChangeColor} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Zmien kolor tekstu</B></Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
  else{
    return(
      <ScrollView contentContainerStyle={[color,ScrollViewContainerStyles.ScrollViewContainer]}>
        <Text style={[textColor,ScrollViewContainerStyles.paddingTop]}><B>Lorem Ipsum</B></Text>
        <Text style={[textColor,ScrollViewContainerStyles.Padding]}>
          Pellentesque feugiat maximus magna, 
          et finibus mi efficitur sed. Mauris mauris quam, vestibulum eu magna a, 
          varius blandit ligula. Donec eleifend finibus tortor, ac mollis arcu fermentum at. 
          Donec aliquam eros metus, eget volutpat lacus pretium condimentum. Vivamus dolor erat, 
          iaculis in mollis nec, imperdiet quis velit. Etiam eu aliquam turpis. Sed sed dignissim diam. 
          Mauris nec dolor est. Sed hendrerit molestie mauris, vitae lobortis felis fringilla eget. 
          Sed eget ipsum posuere, bibendum lorem sed, ultricies turpis. Ut tempus mauris id orci ultrices, 
          vel ornare nulla ullamcorper. Ut posuere pellentesque pulvinar.
        </Text>
        <Text style={ScrollViewContainerStyles.headerText}><B>Opis Ekranu</B></Text>
        <Text style={[textColor, ScrollViewContainerStyles.Padding]}>
          Stworzone zostały 3 komponenty:{`\n`}
          2 komponenty TouchableHighlight 1 do zmiany koloru czcionki 2 do dodawania bloku tekstu.{`\n`}
          1 komponent TouchableOpacity służący do zmiany koloru tła
        </Text>
        <Text style={ScrollViewContainerStyles.headerText}>
          <B>{randomized}</B>
        </Text>
        <Text style={[textColor, ScrollViewContainerStyles.Padding]}>
          {text}
        </Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={onClickChangeBgColor} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Zmien kolor Tła</B></Text>
          </TouchableOpacity>
          <TouchableHighlight onPress={onClickPush} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Nowy blok Tekstu</B></Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={onClickChangeColor} style={ScrollViewContainerStyles.buttons}>
            <Text style={ScrollViewContainerStyles.fontFamily}><B>Zmien kolor tekstu</B></Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
};
```

## Tak przedstawia się plik ScrollView1:
```js
import React, {Suspense} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import {ScrollViewContainerStyles} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';


export default function ScrollView1() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  const [text, onChangeText] = React.useState("Tekst Startowy");
  const [text2, onChangeText2] = React.useState(null);
  const [text3, onChangeText3] = React.useState("Multi linia");
  const [text4, onChangeText4] = React.useState("Limit tekstu");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ScrollView contentContainerStyle= {ScrollViewContainerStyles.ScrollViewContainer}>
      <Text style={ScrollViewContainerStyles.paddingTop}>
        <B>What is Lorem Ipsum?</B>
      </Text>
      <Text style={ScrollViewContainerStyles.Padding}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
      <Text style = {ScrollViewContainerStyles.headerText}>
        <B>Why do we use it?</B>
      </Text>
      <Text style={ScrollViewContainerStyles.Padding}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
      </Text>
      <Text style = {ScrollViewContainerStyles.headerText}>
        <B>Where does it come from?</B>
      </Text>
      <Text style={ScrollViewContainerStyles.Padding}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
        very popular during the Renaissance. The first line of Lorem Ipsum, 
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
        accompanied by English versions from the 1914 translation by H. Rackham.
      </Text>
      <Text style = {ScrollViewContainerStyles.headerText}>
        <B>Where can I get some?</B>
      </Text>
      <Text style={ScrollViewContainerStyles.Padding}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
        by injected humour, or randomised words which don't look even slightly believable. 
        If you are going to use a passage of Lorem Ipsum, 
        you need to be sure there isn't anything embarrassing hidden in the middle of text. 
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, 
        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </Text>
    </ScrollView>
  );
}
```

## Tak przedstawia się plik ScrollView2:
```js
import React, {Component, useState} from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView } from "react-native";
import {ScrollView2Styles, ScrollViewContainerStyles} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';

export default function ScrollView2(props) {
  const navigation = useNavigation();
  return <ScrollViewClass {...props} navigation={navigation} />;
}

export class ScrollViewClass extends Component{
  render(){
    var rows = []
    var randomColor = []
    var randomColor2 = []
    for(let i = 0; i < 20; i++){
      randomColor[i] = (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' ';
      randomColor[i] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' '
      randomColor[i] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      randomColor2[i] = (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' ';
      randomColor2[i] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)+','+' '
      randomColor2[i] += (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      console.log(randomColor)
      rows.push(
        <View style={ScrollView2Styles(randomColor[i]).ParentItem}>
          <View style={ScrollView2Styles(randomColor2[i]).ChildItem}>
          </View>
        </View>
      )
    }
    return (
      <ScrollView contentContainerStyle={ScrollViewContainerStyles.ScrollViewContainer}>
        {rows}
      </ScrollView>
    );
  }
}
```

## Tak przedstawia się plik Swipeable:
```js
import React, {Suspense, Component, useState} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Animated, TouchableHighlight } from 'react-native';
import {SwiperinoStyles,ScrollViewContainerStyles} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-swipeable';
import { RectButton } from 'react-native-gesture-handler';

const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
export default function Swipe(props) {
  const navigation = useNavigation();
  return <SwipeableExample {...props} navigation={navigation} />;
}

export class SwipeableExample extends Component {
  state = {
    currentlyOpenSwipeable: null
  };

  handleScroll = () => {
    const {currentlyOpenSwipeable} = this.state;

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  };

  render() {
    const {currentlyOpenSwipeable} = this.state;
    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
          currentlyOpenSwipeable.recenter();
        }

        this.setState({currentlyOpenSwipeable: swipeable});
      },
      onClose: () => this.setState({currentlyOpenSwipeable: null})
    };

    return (
      <ScrollView onScroll={this.handleScroll} style={SwiperinoStyles.container}>
        <Example1 {...itemProps}/>
        <Example2 {...itemProps}/>
        <Example3 {...itemProps}/>
        <View style={ScrollViewContainerStyles.ScrollViewContainer}>
          <Text style={ScrollViewContainerStyles.paddingTop}>
            Opis ekranu
          </Text>
          <Text style={ScrollViewContainerStyles.PaddingLowerFontSize}>
            Wykorzystany został komponent Swipeable. Komponent ten posiada bardzo dużo możliwości do efektownego
            przesuwania między poszczególnymi komponentami. Na ekranie widoczne są 3 przykłady. 1 przykład pokazuje możliwość
            przesuwania w lewo za pomocą props'u <B>right buttons</B> oraz gdy przesuwamy w prawo jest tam widoczny tekst w trakcie przesuwania
            za pomocą props'u <B>right content</B>. 2 Przykład pokazuje możliwość przesuwania w prawo za pomocą props'u <B>left buttons</B>.
            Gdy przesuniemy ukażę nam się tym razem 6 guzików <B>TouchableOpacity</B>. Teraz przy przesuwaniu w lewo pokaże się tekst przy pomocy
            props'u <B>right content</B>. Przykład 3 pokazuje akcje (tutaj tekst) jak będą się wyświetlać (lub wykonywać) po danej odległości
            jaką przesuniemy palcem za pomocą props'u <B>leftActionActivationDistance</B>.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

function Example1({onOpen, onClose}) {
  return (
    <Swipeable
      leftContent={(
        <View style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
          <Text>Jakaś akcja podczas przesuwania</Text>
        </View>
      )}
      rightButtons={[
        <TouchableOpacity style={[SwiperinoStyles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
          <Text>1</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
          <Text>2</Text>
        </TouchableOpacity>
      ]}
      onRightButtonsOpenRelease={onOpen}
      onRightButtonsCloseRelease={onClose}
    >
      <View style={[SwiperinoStyles.listItem, {backgroundColor: 'salmon'}]}>
        <Text>Przykład 1</Text>
      </View>
    </Swipeable>
  );
}

function Example2({onOpen, onClose}) {
  return (
    <Swipeable
      leftButtonWidth={45}
      leftButtons={[
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'papayawhip'}]}>
          <Text>1</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'olivedrab'}]}>
          <Text>2</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'mistyrose'}]}>
          <Text>3</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'mediumaquamarine'}]}>
          <Text>4</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'lightslategray'}]}>
          <Text>5</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'ivory'}]}>
          <Text>6</Text>
        </TouchableOpacity>
      ]}
      rightContent={(
        <View style={[SwiperinoStyles.rightSwipeItem, {backgroundColor: 'linen'}]}>
          <Text>Jakaś akcja podczas przesuwania</Text>
        </View>
      )}
      onLeftButtonsOpenRelease={onOpen}
      onLeftButtonsCloseRelease={onClose}
    >
      <View style={[SwiperinoStyles.listItem, {backgroundColor: 'paleturquoise'}]}>
        <Text>Przykład 2</Text>
      </View>
    </Swipeable>
  );
}

class Example3 extends Component {

  state = {
    leftActionActivated: false,
    toggle: false
  };

  render() {
    const {leftActionActivated, toggle} = this.state;

    return (
      <Swipeable
        leftActionActivationDistance={200}
        leftContent={(
          <View style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: leftActionActivated ? 'lightgoldenrodyellow' : 'steelblue'}]}>
            {leftActionActivated ?
              <Text>wypuść!</Text> :
              <Text>przesuwaj dalej!</Text>}
          </View>
        )}
        onLeftActionActivate={() => this.setState({leftActionActivated: true})}
        onLeftActionDeactivate={() => this.setState({leftActionActivated: false})}
        onLeftActionComplete={() => this.setState({toggle: !toggle})}
      >
        <View style={[SwiperinoStyles.listItem, {backgroundColor: toggle ? 'thistle' : 'darkseagreen'}]}>
          <Text>Przykład 3</Text>
        </View>
      </Swipeable>
    );
  }
}
```

# Widoki:

## Tak przedstawia się bazowy widok ekranu:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab5/zrzuty/2.PNG)

## Tak przedstawiaja się ScrollView1:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab5/zrzuty/1.png)

## Tak przedstawiaja się ScrollView2:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab5/zrzuty/3.png)

## Tak przedstawia OpacityHighlight:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab5/zrzuty/Touchable%20Opacity%20and%20TouchableHighlight.gif)

## Tak przedstawia się Swipeable:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab5/zrzuty/Swipeable.gif)
