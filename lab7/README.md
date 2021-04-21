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
## Wygląd ekranu głównego:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/1.PNG)

## Wyświetlenie wszystkich rekordów z bazy danych z tabeli **table_user** plik ViewAllUser.js(Najpierw w UseStatcie pobieramy dane i przypisujemy je do zmiennej za pomocą setState, po czym renderowana jest lista, której parametrem wejściowym jest zwrócona wartość w zmiennej z use State'a. Po tym renderowana jest lista elementów poprzez wywołanie zdefiniowanej funkcji strzałkowej **listItemView** ):
```js
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewAllUser = () => {
  let [flatListItems, setFlatListItems] = useState([]);
  // Tutaj pobrane są wszystkie rekordy z tabeli 'table_user'
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        //zapytanie select bez danych z poziomu kodu do zapytania SQL
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          var temp = [];
          // wykonany jest for który przeszukuje wszyskie rządki tabeli i pushuje je do zmiennej temp
          // po czym wywołujemy setFlatListItems czyli zapisujemy dane do zmiennej
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{ backgroundColor: 'white', padding: 20 }}>
        <Text style={{borderBottomWidth:1,borderColor:'#BBBF95'}}><B>Id: </B>{item.user_id}</Text>
        <Text style={{borderBottomWidth:1,borderColor:'#BBBF95'}}><B>Name: </B>{item.user_name}</Text>
        <Text style={{borderBottomWidth:1,borderColor:'#BBBF95'}}><B>Contact: </B>{item.user_contact}</Text>
        <Text style={{borderBottomWidth:1,borderColor:'#BBBF95'}}><B>Address: </B>{item.user_address}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex:1,backgroundColor:'#0486DB'}}>
        <View style={{ flex: 1 }}>
          <FlatList
            //dane dostarczone do flat listy
            data={flatListItems}
            //odzielenie od siebie elementów listy
            ItemSeparatorComponent={listViewItemSeparator}
            //wyciągniecie kluczy
            keyExtractor={(item, index) => index.toString()}
            //renderowanie listy
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewAllUser;
```
## Tak przedstawia się ekran ViewAllUser gdy w bazie danych nie ma rekordów:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/2.PNG)

## Tak wygląda komponent **RegisterUser.js** (Najpierw użytkownik musi podać dane do input'ów, po podaniu danych od razy wykonywany jest setState. Jeśli chcemy przekazać dane z input'ów do bazy należy przesłać je za pomocą buttona. Button zawiera funkcję strzałkową onClick register_user wykonuje się zapytanie SQL jeśli dane w inputach są poprawne):
```js
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import { defaultBG } from './styles'

var db = openDatabase({ name: 'UserDatabase.db' });

const RegisterUser = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    
    // Wykonanie zapytania SQL dodającego dane do bazy
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[defaultBG.bg,{flex:1}]}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter Name"
                onChangeText={
                  (userName) => setUserName(userName)
                }
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter Contact No"
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter Address"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton title="Submit" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegisterUser;
```

## Tak przedstawia się wygląd ekranu RegisterUser po uruchomieniu:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/3.PNG)

## Tak wygląda po poprawnym dodaniu użytkownika:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/4.PNG)

## Tak przedstawia się Plik **UpdateUser** (Po podaniu danych do inputa z id wywołana jest funkcja strzałkowa, która pobiera dane po wskazanym id z inputa i zwraca nam je do zmiennych po setState'cie i wyświetla na ekran. Po czym możemy edytować danę i przekazać je do bazy danych za pomocą guzika UpdateUser z funkcją onClick = updateUser):
```js
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import { defaultBG } from './styles'

var db = openDatabase({ name: 'UserDatabase.db' });

const UpdateUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };
  
  
  // Wykonanie funkcji strzałkowej która pobiera dane po wskazanym id z inputa
  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.user_name,
              res.user_contact,
              res.user_address
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      alert('Please fill User id');
      return;
    }
    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    
    // Wykonanie Update do bazy danych
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[defaultBG.bg,{flex:1}]}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter User Id"
                style={{ padding: 10 }}
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
              />
              <Mybutton
                title="Search User"
                customClick={searchUser} 
              />
              <Mytextinput
                placeholder="Enter Name"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <Mytextinput
                placeholder="Enter Contact No"
                value={'' + userContact}
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytextinput
                value={userAddress}
                placeholder="Enter Address"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton
                title="Update User"
                customClick={updateUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
```

## Tak przedstawia się ekran **UpdateUser** bezpośrednio po wczytaniu:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/5.PNG)

## Tak przedstawia się ekran **UpdateUser** gdy wybraliśmy poprawne id:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/6.PNG)

## Tak wygląda ekran **UpdateUser** po update'cie :
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/7.PNG)

## Tak przedstawia się ekran **ViewAllUser** po dodaniu rekrodów do bazy danych:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/9.PNG)

## Tak przedstawia się plik **ViewUser**(Wyświetlenie pojedynczego usera. Proste zapytanie Select po pobraniu z inputa ID):
```js
import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import {textInput} from './styles'
import { defaultBG } from './styles'
const B = (props) => <Text style={{fontWeight: 'bold',color:'white'}}>{props.children}</Text>

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewUser = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={[defaultBG.bg,{flex:1}]}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Search User" customClick={searchUser} />
          <View style={textInput.output}>
            <Text style={[textInput.color,{borderBottomWidth:1,borderColor:'#BBBF95'}]}><B>User Id: </B>{userData.user_id}</Text>
            <Text style={[textInput.color,{borderBottomWidth:1,borderColor:'#BBBF95'}]}><B>User Name: </B>{userData.user_name}</Text>
            <Text style={[textInput.color,{borderBottomWidth:1,borderColor:'#BBBF95'}]}><B>User Contact: </B>{userData.user_contact}</Text>
            <Text style={[textInput.color,{borderBottomWidth:1,borderColor:'#BBBF95'}]}><B>User Address: </B>{userData.user_address}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ViewUser;
```

## Tak przedstawia się ekran **ViewUser** po wczytaniu :
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/12.PNG)

## Tak przedstawia się ekran **ViewUser** po wybraniu ID:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/14.PNG)

## Tak przedstawia się plik DeleteUser(Usuwanie użytkownika. Pobranie Id i wywołanie Zapytania DELETE FROM table_user where user_id ={inputValue}):
```js
import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import { defaultBG } from './styles'

var db = openDatabase({ name: 'UserDatabase.db' });

const DeleteUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid User Id');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[defaultBG.bg,{flex:1}]}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Delete User" customClick={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DeleteUser;
```

## Tak przedstawia się ekran **DeleteUser** bezpośrednio bo załadowaniu:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/13.PNG)

## Tak przedstawia się ekran **DeleteUser** po poprawnym usunięciu z rekordu z bazy danych:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/10.PNG)

## Tak przedstawia się ekran **ViewAll** po usunięciu danych wcześniej dodanych:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab7/zrzuty/12.PNG)
