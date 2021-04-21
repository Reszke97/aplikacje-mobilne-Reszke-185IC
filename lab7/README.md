# Aplikacje mobilne React-Native
## Lab. nr 7 - Wykorzystanie bazy danych w aplikacji mobilnej

## Utworzyłem w sumie 6 ekranów:
- HomeScreen
- Update
- View
- View All
- Delete
- Register

Struktura plików:
```js
  ./pages
    ├── /components
    │     ├── HomeScreenButton.js                   //Guzik do ekranu HomeScreen            
    │     ├── MyButton.js                           //Guzik używany do wszystkich ekranów poza HomeScreen
    │     ├── MyTextInput.js                        //Custom'owy Text Input
    │     ├── StackNavRightHeader.js                //Plik odpowiedzialny za stylowanie navbara
    |     └── StackScreen.js                        //Komponent do umożliwiający przechodzenie pomiędzy ekranami
    ├── DeleteUser.js                               //Plik umożliwwijący usunięcie user'a z bazy danych
    ├── HomeScreen.js                               //Ekran Główny
    ├── RegisterUser.js                             //Plik umożliwwijący dodanie user'a do bazy danych
    ├── styles.js                                   //style aplikacji
    ├── UpdateUser.js                               //Plik umożliwiający 
    ├── ViewAllUser.js                              //Plik wyświetlający wszystkie rekordy z bazy danych
    └── ViewUser.js                                 //plik wyświetlający wybranego user'a
   app.js
```

## Słowem wstępu aplikacja napisana jest w **React Native-Cli** z wykorzystaniem bazy danych **SQLlite** przy użyciu modułu ```import { openDatabase } from 'react-native-sqlite-storage'```. Baza danych tworzona jest w momencie uruchomienia, logika zdefiniowana jest w pliku **HomeScreen** czyli od razu gdy włączamy aplikacje i wyświetla nam się Ekran główny. Następnie baza danych jest gotowa do wykonwywania na niej operacji tj. usuwanie, dodawanie, edytowanie.

## Tak przedstawia się plik **styles.js**
```js
import {StyleSheet} from 'react-native';

const stylesHome = StyleSheet.create({
    text: {
      color: '#111825',
      textAlign:'center',
      fontFamily:'Roboto-Regular'
    },
    parentContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
    },
    items:{
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#0486DB',
        color: '#ffffff',
        width:'100%',
        height:'16%',
        marginVertical:'2%',
        justifyContent:'center'
      },
      text: {
        color:'white',
        textAlign:'center',
        fontSize:18,
        fontFamily:'Roboto-Regular',
      },
});

export const btn = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#0486DB',
      color: '#ffffff',
      height:40,
      marginHorizontal:'3%',
      marginVertical:'1.5%',
      justifyContent:'center'
    },
    text: {
      color:'white',
      textAlign:'center',
      fontSize:18,
      fontFamily:'Roboto-Regular',
    },
});

export const textInput = StyleSheet.create({
    input:{
        marginHorizontal:'3%',
        marginVertical:'1.5%',
        backgroundColor:'white',
        fontFamily:'Roboto-Regular'
    } ,

    output:{
        backgroundColor:'#0486DB',
        marginHorizontal:'3%',
        marginVertical:'1.5%',
        padding:'2%',
        
    },

    color:{
        color:'white',
    },
});

export const defaultBG = StyleSheet.create({
    bg:{
        backgroundColor:'#05ACD3'
    }
})

export default stylesHome
```

## Custom'owy **guzik** dla ekranu głównego:
```js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {btn} from '../styles'
import stylesHome from '../styles'

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={stylesHome.button}
      onPress={props.customClick}>
      <Text style={stylesHome.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Mybutton;
```

## Custom'owy **guzik** dla wszystkich pozostałych ekranów:
```js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {btn} from '../styles'
import stylesHome from '../styles'

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={btn.button}
      onPress={props.customClick}>
      <Text style={btn.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export default Mybutton;
```

## Custom'owy **TextInput**:
```js
import React from 'react';
import { View, TextInput } from 'react-native';
import {textInput} from '../styles'

const Mytextinput = (props) => {
  return (
    <View style={textInput.input}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="black"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};
export default Mytextinput;
```

## Style dla StackScreen(**StackScreenNavRightHeader**):
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
export default({navigation}) => ({ // get reference to navigation
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#0486DB',
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

## StackScreen:
```js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen'
import ViewUser from '../ViewUser'
import ViewAllUser from '../ViewAllUser'
import UpdateUser from '../UpdateUser'
import RegisterUser from '../RegisterUser'
import DeleteUser from '../DeleteUser'
import optionsStack from './StackNavRightHeader'

const Stack = createStackNavigator();

function StackScreen({options}) {
    return(
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={options.optionsHome}
            />
            <Stack.Screen
                name="View"
                component={ViewUser}
                options = {optionsStack}
            />
            <Stack.Screen
                name="ViewAll"
                component={ViewAllUser}
                options = {optionsStack}
            />
            <Stack.Screen
                name="Update"
                component={UpdateUser}
                options = {optionsStack}
            />
            <Stack.Screen
                name="Register"
                component={RegisterUser}
                options = {optionsStack}
            />
            <Stack.Screen
                name="Delete"
                component={DeleteUser}
                options = {optionsStack}
            />
        </Stack.Navigator>
    )
}
export default StackScreen
```

## Plik główny **App.js**:
```js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './pages/components/StackScreen';
import {options as optionsHome} from './pages/HomeScreen'

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen 
        options={{
          optionsHome,
        }}
      >
      </StackScreen>
    </NavigationContainer>
  );
};
export default App;
```

## Plik z ekranem startowym **HomeScreen**(Tutaj tworzona jest Baza danych oraz tworzone odpowiednie kolumny do bazy danych):
```js
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import HomeScreenButton from './components/HomeScreenButton'
import { openDatabase } from 'react-native-sqlite-storage';
import stylesHome from './styles.js'

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
  // W useEffect'cie jest zdefiniowane tworzenie bazy danych
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        // sprawdzenie czy bazie danych sqllite master znajduje sie baza danych z tabela o nazwie 'table_user'
        function (tx, res) {
          console.log('item:', res.rows.length);
          // jesli baza danych posiada zero rekordów to zostanie stworzona
          // jesli baza danych posiada juz rekordy to została już wczytana
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <SafeAreaView style={[stylesHome.parentContainer,{backgroundColor:'#05ACD3'}]}>
      <View style={stylesHome.items}>
        <HomeScreenButton
          title="Register"
          customClick={() => navigation.navigate('Register')}
        />
        <HomeScreenButton
          title="Update"
          customClick={() => navigation.navigate('Update')}
        />
        <HomeScreenButton
          title="View"
          customClick={() => navigation.navigate('View')}
        />
        <HomeScreenButton
          title="View All"
          customClick={() => navigation.navigate('ViewAll')}
        />
        <HomeScreenButton
          title="Delete"
          customClick={() => navigation.navigate('Delete')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

export const options ={
  title: 'Home',
  color:'black',
  headerStyle: {
    backgroundColor: '#0486DB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: "200",
    fontFamily:'Roboto-Black',
    fontSize: 35,
    alignSelf: 'center',
  },
}
```
