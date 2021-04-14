# Aplikacje mobilne React-Native
## Lab. nr 6 - obsługa obrazów + tryb offline

## Utworzyłem w sumie 7 ekranów:
- HomeScreen
- Image Component
- Img With Slider
- Lazy Loading Img
- Detect Connection
- Async Storage
- Synchronization

Struktura plików:
```js
  ./React_Components
    ├── /screens
    │     ├── HomeScreen.js                   //Plik bazowy
    │     ├── ComponentToBeLoaded.js            //Plik w którym znajdują się ikony, które będą leniwie ładowane
    │     ├── DetectConnection.js             //Plik odpowiedzialny za zaimplementowani detekcji łączności
    │     ├── Img.js                          //Plik odpowiedzialny za ładowanie zdjęć z uri oraz src
    │     ├── ImgWithSlider.js                //Plik w którym znajduję się logika dla zmiany rozmiaru zdjęcia
    │     ├── LazyLoadingImg.js               //Plik w którym jest leniwie ładowane zdjęcia oraz, do którego ładowany jest komponent ComponentToBeLoaded
    │     ├── StackNavRightHeader.js          //Plik odpowiedzialny za stylowanie navbara
    │     ├── StackScreen.js                  //Komponent do umożliwiający przechodzenie pomiędzy ekranami
    │     ├── Store.js                        //Plik, w którym zawarta jest logika dla synchronizacji danych
    |     └── Synchronization.js              //Plik wykorzystujący Store.js, wyświetlający ekran synchronizacji danych
    └── /static
          └── styles.js                      //style aplikacji
   app.js
```

# Tak przedstawiają się style aplikacji:
```js
import {StyleSheet} from 'react-native';

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
        height:80,
        backgroundColor:'#fa0',
    },

    text:{
      color:'white',
      fontSize:25,
      fontFamily:'AkayaTelivigala-Regular',
    }
})

export const ImgsStyles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%'
  },
  items:{
    width:'100%',
    height:'50%'
  },
  img:{
    width: '100%',
    height:'100%',
    resizeMode:'center',
  },
  imgHeader:{
    position: 'absolute',
    fontSize: 23,
    alignSelf: 'center',
    fontFamily:'AkayaTelivigala-Regular',
    color:'chocolate'
  },
})

export const ImgSlider = (props)=> StyleSheet.create({
  img:{
    width: 400,
    height:360,
    resizeMode:'center',
    transform: [{ scale: props}],
  },

})

export const DetectConnection = StyleSheet.create({
  parentContainer:{
    display:'flex',
    flex:1,
    alignContent:'center',
    alignItems:'flex-start',
  },
  items:{
    margin:'1%',
    paddingVertical:'2%',
    paddingHorizontal:'2%',
    width:'98%',
    backgroundColor: '#0892D0',
  },
  text:{
    fontFamily:'Roboto-Black',
    color:'white',
    fontSize:18
  }
})

export const SynchStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});

export const AsyncStor = StyleSheet.create({
  input:{
    color:'white'
  },

  itemContainer:{
    flexDirection: 'row',
    paddingHorizontal:'1%',
    marginHorizontal:'2%',
    marginVertical:'1%',
    backgroundColor:'#0892D0'
  },

  button:{
    width:'29.33%',
    alignItems:'center',
    marginHorizontal:'2%',
    backgroundColor:'#0892D0',
    height:50,justifyContent:'center',
    borderRadius:20,
  },

  buttonText:{
    color:'white',
    fontSize:16,
    fontFamily:'Roboto-Regular'
  }
})

export default stylesHome
```

## Kod do styli StackNavigation header:
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

## Kod do komponentu odpowiedzialnego za przechodzenię pomiędzy ekranami *StackScreen*:
```js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js'
import ImgComponent from './Img'
import LazyLoading from './LazyLoadingImg.js'
import SliderComponent from './ImgWithSlider.js'
import optionsStack from './StackNavRightHeader.js'
import DetectConnection from './DetectConnection.js'
import AsyncStorage from './AsyncStorage'
import Synchronization from './Synchronization.js'

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
          name="Image Component" 
          component={ImgComponent}
          options = {optionsStack}
        />
        <Stack.Screen 
          name="Img With Slider" 
          component={SliderComponent}
          options={optionsStack}
        />
        <Stack.Screen 
            name="Lazy Loading Img"
            component={LazyLoading}
            options={optionsStack}
        />
        <Stack.Screen 
            name="Detect Connection" 
            component={DetectConnection}
            options={optionsStack}
        />
        <Stack.Screen 
            name="Async Storage" 
            component={AsyncStorage}
            options={optionsStack}
        />
        <Stack.Screen 
            name="Synchronization" 
            component={Synchronization}
            options={optionsStack}
        />
      </Stack.Navigator>
    )
    
}
export default StackScreen
```

## Kod do ekranu głównego HomeScreen:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import stylesHome from '../static/styles.js';


export default function HomeScreen({ navigation }) {
    return (
      <View style={stylesHome.containerCol}>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Image Component')}>
          <Text style={stylesHome.text}>Image Component</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Img With Slider')}>
          <Text style={stylesHome.text}>Img With Slider</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Lazy Loading Img')}>
          <Text style={stylesHome.text}>Lazy Loading Img</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Detect Connection')}>
          <Text style={stylesHome.text}>Detect Connection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Async Storage')}>
          <Text style={stylesHome.text}>Async Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.colItems} onPress={() => navigation.navigate('Synchronization')}>
          <Text style={stylesHome.text}>Synchronization</Text>
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
```

## Wygląd ekranu głównego
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab6/zrzuty/13.PNG)

## Kod do komponentu Img:
```js
import React, {Suspense} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import {ImgsStyles} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';

export default function ImgComponent() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  return(
    <View style={ImgsStyles.container}>
      <View style={ImgsStyles.items}>
        <Text style={ImgsStyles.imgHeader}>Bulbasaur</Text>
        <Image
          style={ImgsStyles.img}
          source={{
            uri: 'https://static.wikia.nocookie.net/pokemony/images/4/43/Bulbasaur.png/revision/latest/scale-to-width-down/1000?cb=20150824101614&path-prefix=pl'
          }}
        />
      </View>
      <View style={ImgsStyles.items}> 
        <Text style={ImgsStyles.imgHeader}>Pikachu</Text>
        <Image
          style={ImgsStyles.img}
          source={require('../static/imgs/Pikachu.png')}
        />
      </View>
    </View>
  )
}
```

## wygląd komponentu **Img**:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab6/zrzuty/1.PNG)

## Kod do komponentu **ImgWithSlider**:
```js
import React, {Suspense, useState} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import {ImgsStyles, ImgSlider} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

export default function SliderComponent() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  const [value, setValue] = useState(1);

  return(
    <View style={ImgsStyles.items}>
      <Text style={ImgsStyles.imgHeader}>Bulbasaur</Text>
      <Image
        style={ImgSlider(value).img}
        source={{
          uri: 'https://static.wikia.nocookie.net/pokemony/images/4/43/Bulbasaur.png/revision/latest/scale-to-width-down/1000?cb=20150824101614&path-prefix=pl'
        }}
      />
      <Slider
        value={1}
        style={{width: 400, height: 40}}
        minimumValue={0.1}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={value => setValue(value)}
      />
    </View>
  )
}
```

## Wygląd komponentu ImgWithSlider po załadowaniu:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab6/zrzuty/2.PNG)

## Wygląd komponentu ImgWithSlider po przesunięciu suwaka w lewo(zmniejszenie):
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab6/zrzuty/3.PNG)

## Wygląd komponentu ImgWithSlider po przesunięciu suwaka w prawo(zwiększenie):
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab6/zrzuty/4.PNG)

## Ekran w którym do zrobienia było leniwa ładowanie zdjęcia oraz ikony podzieliłem na 2 komponenty: ComponentToBeLoaded, który będzie leniwie ładowany wraz z ikonami w nim zawartymi do komponentu LazyLoadingImg. Ten drugi natomiast odpowiada za renderowanie. Jakony ikony wyrzkorzystałem pakiet ikon od https://ionicons.com/.

## Kod do komponentu ComponentToBeLoaded:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

export default function ComponentToBeLoaded(){
    return(
        <ScrollView contentContainerStyle ={{display:'flex',flexDirection:'column',width:'100%'}}>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row'}}>
                <Icon name="md-menu" size = {61} color={'white'}></Icon>
                <Icon name="accessibility-outline"color={'white'} size = {61}></Icon>
                <Icon name="add-outline"color={'white'} size = {61}></Icon>
                <Icon name="add-circle-outline"color={'white'} size = {61}></Icon>
                <Icon name="airplane-outline"color={'white'} size = {61}></Icon>
                <Icon name="alarm-outline"color={'white'} size = {61}></Icon>
                <Icon name="albums-outline"color={'white'} size = {61}></Icon>
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="analytics-outline"color={'white'} size = {56}></Icon>
                <Icon name="aperture-outline"color={'white'} size = {56}></Icon>
                <Icon name="apps-outline"color={'white'} size = {56}></Icon>
                <Icon name="archive-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-back-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-back-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-down-outline"color={'white'} size = {56}></Icon>
                
                
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="arrow-redo-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-redo-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-undo-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-undo-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-up-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-up-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="at-outline"color={'white'} size = {56}></Icon>
                
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="call-outline"color={'white'} size = {56}></Icon>
                <Icon name="bed-outline"color={'white'} size = {56}></Icon>
                <Icon name="basket-outline"color={'white'} size = {56}></Icon>
                <Icon name="basketball-outline"color={'white'} size = {56}></Icon>
                <Icon name="battery-full-outline"color={'white'} size = {56}></Icon>
                <Icon name="battery-dead-outline"color={'white'} size = {56}></Icon>
                <Icon name="battery-charging-outline"color={'white'} size = {56}></Icon>
                
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="bandage-outline"color={'white'} size = {56}></Icon>
                <Icon name="bar-chart-outline"color={'white'} size = {56}></Icon>
                <Icon name="barbell-outline"color={'white'} size = {56}></Icon>
                <Icon name="at-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="attach-outline"color={'white'} size = {56}></Icon>
                <Icon name="backspace-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-forward-circle-outline"color={'white'} size = {56}></Icon>
            </View>
            <View style={{backgroundColor:'#0892D0',flexDirection:'row',paddingHorizontal:'2%'}}>
                <Icon name="arrow-down-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="arrow-forward-outline"color={'white'} size = {56}></Icon>
                <Icon name="alert-outline"color={'white'} size = {56}></Icon>
                <Icon name="alert-circle-outline"color={'white'} size = {56}></Icon>
                <Icon name="american-football-outline"color={'white'} size = {56}></Icon>
                <Icon name="cart"color={'white'} size = {56}></Icon>
                <Icon name="calculator"color={'white'} size = {56}></Icon>
            </View>
        </ScrollView>
    )
}
```

## Kod do komponentu LazyLoadingImg:
```js
import React, {Suspense, useState} from 'react';
import { View, Text,Button, TouchableOpacity, Image } from 'react-native';

const LazyComponent = React.lazy(()=> import('./ComponentToBeLoaded'));
const placeholder = require('../static/imgs/Pikachu.png')
function Placeholder(props) {
  if(props.loaded)return null
  else return <Image style={{width:400,height:320,resizeMode:'center'}} source={placeholder} />;
}

export default function LazyImage() {
  const [loaded, setLoaded] = useState(false);
  return (
    <View style={{display:'flex',flex:1}}>
      <Placeholder loaded={loaded}  />
      <Image
          style = {{width:400,height:320,resizeMode:'center'}}
          source ={{
            uri: 'https://static.wikia.nocookie.net/pokemony/images/e/e3/Squirtle.png/revision/latest/scale-to-width-down/1000?cb=20150825140513&path-prefix=pl'
          }}
          onLoad={() => {
            setLoaded(true)
        }}
      />
      <Suspense fallback = {<Text>Loading</Text>}>
        <LazyComponent/>
      </Suspense>
    </View>
  );
}
```

## Wygląd ekranu (aby zobaczyć placeholder należałoby odłączyć internet ponieważ zdjęcie jest wczytywane i renderowane tak szybko że od razu widać właściwe zdjęcie):
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab6/zrzuty/5.png)

## Kod do komponentu DetectConnection:
```js
import React, {Suspense, Component, useState, useEffect} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Animated, TouchableHighlight } from 'react-native';
import {DetectConnection} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-swipeable';
import { RectButton } from 'react-native-gesture-handler';
import NetInfo from "@react-native-community/netinfo";

const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
export default function Swipe() {
  var string = ""
  const [connected, setConnected] = useState("");
  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connection);
    }
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);
    return () => {
      unsubscribe();
    };
  }, []);
  if(connected==""){
    return(
      <View>
        <Text>Loading</Text>
        <Text>Loading</Text>
        <Text>Loading</Text>
        <Text>Loading</Text>
        <Text>Loading</Text>
      </View>
    )
  }
  else{
    return(
      <View style={DetectConnection.parentContainer}>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>Connection type: {connected.type}</Text>
        </View>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>Internet Connection: {(() => {
              if (connected.isConnected) {
                string = "Established"
              }
              else string = "Not established"
            })()}
            {string}
          </Text >
        </View>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>frequency: {(() => {
              if (!connected.isConnected) {
                string = "Not Connected"
              }
              else string = `${connected.details.frequency}Mhz`
            })()}
            {string}
          </Text>
        </View>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>ip: {(() => {
              if (!connected.isConnected) {
                string = "Not Connected"
              }
              else string = `${connected.details.ipAddress}`
            })()}
            {string}
          </Text>
        </View>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>strength: {(() => {
              if (!connected.isConnected) {
                string = "Not Connected"
              }
              else string = `${connected.details.strength}%`
            })()}
            {string}
          </Text>
        </View>
      </View>
    )
  }
}
```
## Komponent DetectConnection uaktalnia się sam dzięki ```event.listener'owi(onNetworkChange)``` dzięki pakietowi NetInfo i wygląda tak gdy mamy dostęp do sieci:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab6/zrzuty/6.PNG)

## Tak wygląda gdy nie mamy dostępu do sieci:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab6/zrzuty/7.PNG)

## Kod do komponentu AsyncStorage odpowiadającego za obsługę zapisu danych aplikacji lokalnie:
```js
import React, {Component, useEffect, useState } from 'react';
import { Button, ScrollView, Text,TextInput, View,TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStor} from '../static/styles.js';

import { useNavigation } from '@react-navigation/native';

const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

export default function ScrollView2(props) {
  const navigation = useNavigation();
  return <AsyncStorageScreen {...props} navigation={navigation} />;
}
class AsyncStorageScreen extends Component {
    constructor(){
        super()
    }
    state = {
        key:'',
        value:'',
        asyncKey:'',
        asyncValue:'',
    }
    storeData = async () => {
        var key = this.state.key
        var value = this.state.value
        try {
            await AsyncStorage.setItem(key,value);
        } catch (error) {
            console.error(error)
        }
    };
    deleteData = async () =>{
        try {
            await AsyncStorage.clear();
            this.setState({
                key:'',
                value:'',
                asyncKey:'',
                asyncValue:''
            })
        } catch (error) {
            console.error(error)
        }
    }

    loadData = async () =>{
        try {
            const keys = await AsyncStorage.getAllKeys();
            const values = await AsyncStorage.multiGet(keys);
            console.log(values)
            this.setState({
                asyncKey: values[0][0],
                asyncValue:values[0][1],
            })
            
        } catch (error) {
            console.error(error)
        }
    }
    render(){ 
        return (
            <>
                <View style={{padding:'2%'}}>
                    <Text style={{textAlign:'justify'}}>
                        Na tym ekranie można zapisać dane lokalnie do AsyncStorage po podaniu klucz i wartości w inputach.
                        Po wpisaniu danych należy dodać wartość za pomocą guzika. Później za pomocą guzika dodaj do tekstu
                        za pomocą funkcji loadData wykorzystującej <B>AsyncStorage.getAllKeys</B> oraz <B>AsyncStorage.multiGet(keys)</B>
                        pobierana jest para <B>klucz i wartość</B> i wczytywana jest do tekstu po kliknięciu guzika 
                        <B>Dodaj do tekstu</B>. Ostatni guzik <B>Usuń</B> czyści zawartość AsyncStorage oraz ekran.
                    </Text>
                </View>
                <ScrollView contentContainerStyle={{flex:1,flexDirection: 'column'}}>
                    <View >
                        <Text style={{padding:'2%',fontSize:20}}><B>Podaj wartość do zapisania</B></Text>
                        <View style={AsyncStor.itemContainer}>
                            <TextInput placeholderTextColor="white" style={AsyncStor.input} onEndEditing={event =>{this.setState({key: event.nativeEvent.text})}} placeholder="Podaj klucz"/>
                        </View>
                        <View style={AsyncStor.itemContainer}>
                            <TextInput placeholderTextColor="white" style={AsyncStor.input} onEndEditing={event =>{this.setState({value: event.nativeEvent.text})}} placeholder="Wpisz wartość" />
                        </View>
                        <View style={{flexDirection:'row',paddingVertical:'2%'}}>
                            <TouchableOpacity onPress={this.storeData} style={AsyncStor.button}>
                                <Text style={AsyncStor.buttonText}>Dodaj wartość</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.loadData} style={AsyncStor.button}>
                                <Text style={AsyncStor.buttonText}>Wyświetl</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.deleteData} style={AsyncStor.button}>
                                <Text style={AsyncStor.buttonText}>Usuń</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={{padding:'2%',fontSize:20,fontFamily:'Roboto-Regular'}}>
                            {this.state.asyncKey}{this.state.asyncValue}
                        </Text>
                    </View>
                </ScrollView>
            </>
        )
    };
}
```