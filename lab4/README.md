# Aplikacje mobilne React-Native

## Laboratorium nr 4 obsługa danych wprowadzanych przez użytkownika + modale

## Utworzyłem w sumie 6 ekranów:
- HomeScreen
- DateTime
- SelectComp
- SwitchComponent
- TextInput
- Toast

Struktura plików:
```js
  ./React_Components
    ├── /screens
    │     ├── DateTime.js                     //Komponent do date time pickera
    │     ├── HomeScreen.js                   //Komponent bazowy
    │     ├── Select.js                       //Select komponent odpowiedzialny za możliwość wybierania itemów z listy
    │     ├── SelectComp.js                   //Komponent odpowiedzialany za możliwość wyświetlania z Selecta
    │     ├── StackNavRightHeader.js          //style dla headera ze stack navigation
    │     ├── StackScreen.js                  //Komponent do umożliwiający przechodzenie pomiędzy ekranami
    │     ├── SwitchComponent.js              //Komponent w którym jest zastosowany modal ze Switchem
    │     ├── TextInput.js                    //Komponent w którym są text inputu
    |     └── Toast.js                        //Komponent z Toastem i Modalem
    └── /static
          └── styles.js
   app.js
```

# Kody:

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
import TextInp from './TextInput.js'
import SwitchComponent from './SwitchComponent.js'
import SelectComp from './SelectComp.js'
import optionsStack from './StackNavRightHeader.js'
import DateTime from './DateTime.js'
import Toasty from './Toast.js'

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
          name="TextInput" 
          component={TextInp}
          options = {optionsStack}
        />
        <Stack.Screen 
          name="Select" 
          component={SelectComp}
          options={optionsStack}
        />
        <Stack.Screen 
            name="SwitchComponent" 
            component={SwitchComponent}
            options={optionsStack}
        />
        <Stack.Screen 
            name="DateTime" 
            component={DateTime}
            options={optionsStack}
        />
        <Stack.Screen 
            name="Toast" 
            component={Toasty}
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

## Tak przedstawia się plik TextInput(wykorzystane opcje TextInputa: TextInput z wartością na starcie) 
## (placeholder,value nie do zmiany(ustawione na sztywno),możliwość dodawania tylko liczb,multilinie,limit tekstu  ):
```js
import React, {Suspense} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import {stylesTextInput} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';


export default function TextInp() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  const [text, onChangeText] = React.useState("Tekst Startowy");
  const [text2, onChangeText2] = React.useState(null);
  const [text3, onChangeText3] = React.useState("Multi linia");
  const [text4, onChangeText4] = React.useState("Limit tekstu");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={stylesTextInput.container}>
      <TextInput
        style={stylesTextInput.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={stylesTextInput.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="podaj tekst"
      />
      <TextInput
        style={stylesTextInput.input}
        value='nie do zmiany'
      />
      <TextInput
        style={stylesTextInput.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="podaj liczbe"
        keyboardType="numeric"
      />
      <TextInput
        style={stylesTextInput.input}
        multiline={true}
        onChangeText={onChangeText3}
        value={text3}
        numberOfLines={2}
      />
      <TextInput
        style={stylesTextInput.input}
        onChangeText={onChangeText4}
        value={text4}
        maxLength={12}
      />
    </View>
  );
}
```

## Tak przedstawia się Select.js:
```js
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
```

## Tak przedstawia się SelectComp.js:
```js
import React, { useState } from "react";
import { View, Text } from "react-native";
import {stylesSelect} from '../static/styles.js';
import Select from "./Select";

export default function SelectingOptions() {
  const [colors, setColors] = useState([
    { label: "none", value: null },
    { label: "Silver", value: "Silver" },
    { label: "Black", value: "Black" },
    { label: "Blue", value: "Blue" },
    { label: "Mettalic", value: "Mettalic" }
  ]);
  const [cars, setCars] = useState([
    { label: "none", value: null, colors: ["Silver", "Black", "Blue", "Mettalic"] },
    { label: "BMW", value: 1, colors: ["Mettalic", "Silver"] },
    { label: "Audi", value: 2, colors: ["Black", "Blue"] },
    { label: "Fiat", value: 3, colors: ["Silver", "Blue"] },
    { label: "Renault", value: 4, colors: ["Mettalic", "Black"] }
  ]);
  const [availableCars, setAvailableCars] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selection, setSelection] = useState("");

  return (
    <View style={stylesSelect.container}>
      <Select
        label="Color"
        items={colors}
        selectedValue={selectedColor}
        onValueChange={size => {
          setSelectedColor(size);
          setSelectedCar(null);
          setAvailableCars(cars.filter(i => i.colors.includes(size)));
        }}
      />
      <Select
        label="Car"
        items={availableCars}
        selectedValue={selectedCar}
        onValueChange={garment => {
          setSelectedCar(garment);
          setSelection(
            `${selectedColor} ${cars.find(i => i.value === garment).label}`
          );
        }}
      />
      <Text style={stylesSelect.text}>{selection}</Text>
    </View>
  );
}
```

## Tak przedstawia się plik Switch Component.js:
```js
import React, { useState } from "react";
import { View, Switch, StyleSheet,Modal,Pressable,Text } from "react-native";
import {SwitchComp} from '../static/styles.js';

export default function SwitchComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={SwitchComp.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={SwitchComp.containerModal}>
          <View style={SwitchComp.containerModalWrapper}>
            <Text style={SwitchComp.text}>Schowaj modal</Text>
            <Switch value={modalVisible} onValueChange={() => setModalVisible(false)}/>
          </View>
        </View>
        <View style={SwitchComp.outputContainer}>
          <Text style={SwitchComp.output}>{Math.floor(Math.random()*23)}</Text>
        </View>
      </Modal>
      <Text style={SwitchComp.text}>Wyświetlenie pseudolosowej liczby</Text>
      <Switch style={SwitchComp.items} value={modalVisible} onValueChange={() => setModalVisible(true)}/>
    </View>
  );
};
```

## Tak przedstawia się DateTime.js:
```js
import React, {useState} from 'react';
import {View, Button, Platform, Text, TouchableOpacity, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {dateTime} from '../static/styles.js';

export default function DateTime() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    alert(currentDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <View style={dateTime.container}>
        <TouchableOpacity style={dateTime.touchOpac} onPress={showDatepicker}>
          <Text style={dateTime.text}>
            Wybierz Datę
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={dateTime.touchOpac} onPress={showTimepicker}>
          <Text style={dateTime.text}>
            Wybierz Godzinę
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={dateTime.container}>
        <Text style={dateTime.textOutput}>Data: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
        <Text style={dateTime.textOutput}>Godzina: {date.getHours()}:{date.getMinutes()}</Text>
      </View>
      <View >
        <Text style={dateTime.description}>Wybieranie daty za pomocą komponentu <B>DateTimePicker</B></Text>
        <Text style={dateTime.description}>Domyślnie na początku ustawiona jest data początkowa. Po kliknięciu w odpowiedni guzik pokazują się nam okienka 
          z wyborem daty i godziny.Po wybraniu wskazanej wartości pokazuje się alert oraz data i godzinia również na ekranie.
        </Text>
      </View>
    </>
  );
};
```
## Tak przedstawia się plik Toast.js:
```js
import React ,{Component , useEffect, useState}  from 'react';
import { View, Text, ScrollView,Button, Modal,ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function(props) {
    const navigation = useNavigation();
    return <ToastScreen {...props} navigation={navigation} />;
}

const ToastButton = () => {
  const [visible, setvisible] = React.useState(false);
  const [switchOn, setswitchOn] = React.useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => setvisible(false), [visible]);

  const handleButtonPress = () => {
    setvisible(true);
  };

  const onToggleSwitch = () => {
    setswitchOn(!switchOn);
  };


  var promise = null
  const createPromise = () => {
    let time = Math.floor(Math.random()*10000)
    setTime(time)
    promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ukryj');
        }, time);
    });
  }

  return (
    <View style={{margin:'2.5%'}}>
        <Toast visible={visible} />
        <Button title="Toast and Modal" onPress={() => {
            onToggleSwitch()
            handleButtonPress()
            createPromise()
            promise.then((value) => {
                if(value == 'ukryj'){
                    setswitchOn(false)
                }
            });
        }}/>
        <Modal
            animationType="fade"
            transparent={false}
            visible={switchOn}
            onRequestClose={() => {
                setModalVisible(!switchOn);
            }}
        >
            <View >
                <View >
                    <Text onPress={onToggleSwitch} >Modal wyłączy się za:</Text>
                    <Text >{time/1000} s</Text>
                </View>
            </View>
        </Modal> 
    </View>
  );
};

const Toast = ({ visible}) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            "Toast",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
        );
    }
    return null;
};

class ToastScreen extends Component {
  render(){
      return (
          <View >
          <ScrollView style={{margin:'2.5%'}}>
              <ToastButton />
              <Text > 
                  Po kliknieciu w Button pojawi się ToastAndroid oraz Modal.
                  W modalu zostanie wyświetlony czas w sekundach. Po upływie randomowo wygenerwanego czasu zostanie on zamknięty.
                  Modal zostanie zamkniety po otrzymianiu z Promise'a wartości 'hide'
              </Text>
          </ScrollView>
          </View>
      );
  }
}
```
