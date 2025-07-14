# Lab 3 – Renderowanie listy danych + obsługa progresu
## Źródło
https://zacniewski.github.io/old/tasks-mobile-apps-react-native/

## Utworzyłem w sumie 6 ekranów
- HomeScreen
- LazyLoading
- SortFilter
- StepProgressBar(tutaj 3 ekrany do progressu)

Struktura plików:
```
  ./React_Components
    ├── /screens
    │     ├── ComponentToBeLoaded.js
    │     ├── HomeScreen.js
    │     ├── LazyLoading.js
    │     ├── SortFilter.js
    │     ├── StackNavRightHeader.js
    │     ├── StackScreen.js
    |     └── StepProgressBar.js
    └── /static
          └── styles.js
   app.js
```
## Plik **HomeScreen** odpowiada za główne menu

## Plik **ComponentToBeLoaded** jest komponentem który będzie ładowany za pomocą lazy loading do innego komponentu

## Plik **LazyLoading** to komponent w którym zastoswany został **lazy laoding**

## Plik **SortFilter** to komponent w którym wykonuje się sortowanie/generacja liczb pseudolosowych

## Plik StackNavRightHeader to plik zawierający opcje dla StackNavigatora w komponencie LazyLoading z propem **navigation** aby możliwa była nawigacja z headera stack navigatora

## Plik StackScreen odpowiada za przemieszczanie się pomiędzy ekranami

## Plik StepProgressBar zawiera komponenty potrzbne do realizacji progresu krokowego

# Kody

## Tak przedstawia się plik App.js
```js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './React_Components/screens/StackScreen.js';
import {options as optionsHome} from './React_Components/screens/HomeScreen.js';
import {options as optionsSortFilter} from './React_Components/screens/SortFilter.js';
import {options as optionsStepProgressBar} from './React_Components/screens/StepProgressBar.js';

function App() {
  return (
    // Tutaj defniujemy Navigation Container czyli w tym miejscu mówimy naszej apce o istnieniu naszych komponentów
    <NavigationContainer>
      <StackScreen 
        options={{
          optionsHome,
          optionsSortFilter,
          optionsStepProgressBar
        }}
      >
      </StackScreen>
    </NavigationContainer>
  );
}
export default App;
```

## Tak przedstawia się plik **HomeScreen**
```js
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
```

## Tak przedstawia się komponent **StackScreen**
```js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js'
import LazyLoading from './LazyLoading.js'
import SortFilter from './SortFilter.js'
import StepProgressBar from './StepProgressBar.js'
import optionsStack from './StackNavRightHeader.js'

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
          name="LazyLoading" 
          component={LazyLoading}
          options = {optionsStack}
        />
        <Stack.Screen 
          name="SpreadOperator" 
          component={StepProgressBar}
          options={options.optionsStepProgressBar}
        />
        <Stack.Screen 
            name="Sortowanie i Filtrowanie" 
            component={SortFilter}
            options={options.optionsSortFilter}
        />
      </Stack.Navigator>
    )
    
}

export default StackScreen
```

## Tak przedstawia się komponent LazyLoading:
```js
import React, {Suspense} from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';

// Należy zaimportować Suspense z Reacta następnie za pomocą metody lazy() importujemy komponent który będziemy ładować przy pomocy lazy loading
const LazyComponent = React.lazy(()=> import('./ComponentToBeLoaded'));

export default function LazyLoading() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  return (
    <View >
      <View>
        <Text style={{textAlign:'center',fontFamily:'Roboto-Medium',fontSize:20,paddingTop:10,paddingHorizontal:10}}>Hello this is The component that will call another component           with lazy loading
        </Text>
      </View>
      // Do tego widoku załadowany zostanie komponent za pomocą lazy loading
      <View style={{margin:10,fontFamily:'SourceSerifPro-Light'}}>
        // Aby pokazać Loading ustawiłem ilość obrotów w pętli na 50 tys.
        <Suspense fallback = {<Text>Loading</Text>}>
          <LazyComponent length = {50000} />
        </Suspense>
      </View>
    </View>
  );
}
```
## Tak przedstawia się plik **ComponentToBeLoaded**:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';
import { ScrollView } from 'react-native-gesture-handler';

export default function ComponentToBeLoaded({length}){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return(
        // Należało wykorzystać ScrollView zamiast zwykłego View aby można było scrollować
        <ScrollView>
            <Text>{result}</Text>
        </ScrollView>
    )
}
```
## Tak przedstawia się plik **StackNavRightHeader**:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';

// Są to opcje dla StackNavigatora. Należało przekazać je za pomocą funkcji która przyjmuje navigation jako props
// W celu podczepienia nawigacji w Headerze do onClick na buttonie
export default({navigation}) => ({ // get reference to navigation
    title: 'Lazy Loading',
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


## Tak przedstawia się plik **SortFilter** :
```js
//import * as React from 'react';
import React, {Component, useState} from 'react';
import { View, Text,Button, TouchableOpacity, FlatList } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import {listStyles} from '../static/styles.js';

// Wykorzystując StackNavigatora przy komponencie klasowym należało owrapować go w komponent funkcyjny i zastosować metodę useNavigation
export default function(props) {
  const navigation = useNavigation();
  return <SortFilter {...props} navigation={navigation} />;
}

const B = (props) => <Text style={{fontWeight: 'bold',color:'orange'}}>{props.children}</Text>
const C = (props) => <Text style={{fontWeight: 'bold',color:'#8d43b5'}}>{props.children}</Text>

export class SortFilter extends Component{
  constructor(){
    super()
    this.state = {
      array: new Array(100).fill(10).map((v, i) => ({ key: i.toString(), value: `${v}` })),
    }
    // tablica liczb na której sortuje, generuje oraz mapuje dane na listę
    this._array = new Array(100).fill(10);
  }

  //funkcja odpowiedzialna za generowanie liczb pseudolosowych
  Randomize(event) {
    for(let i = 0; i<100;i++){
      this._array[i] = (Math.floor(Math.random() * 1000)+1);
    }

    this.setState({
      array:this._array.map((v, i) => ({ key: i.toString(), value: `${v}` })),
    })
  }

  //funkcja sortująca
  Sort(event){
    this._array.sort((a,b) => a > b ? 1:-1)
    this.setState({
      array:this._array.map((v, i) => ({ key: i.toString(), value: `${v}` }))
    })
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={listStyles.container}>
          <FlatList
            data={this.state.array}
            renderItem={({ item }) => <Text style={listStyles.item}>liczba: <B>{item.value}</B> element nr : <C>{item.key}</C></Text>}
          />
        </View>
        <View style={listStyles.buttonContainer}>
            <TouchableOpacity style={listStyles.buttons} onPress={this.Randomize.bind(this)}>
              <Text style={listStyles.descriptionText}>Randomizuj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={listStyles.buttons} onPress={this.Sort.bind(this)}>
              <Text style={listStyles.descriptionText}>Sortuj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={listStyles.buttons} onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={listStyles.descriptionText}>Home</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export const options ={
  title: 'Sortowanie i Filtrowanie',
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
## Tak przedstawia się plik **StepProgressBar**:
```js
import * as React from 'react';
import { View, Text,Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

// tutaj importuje sobie ProgressSteps oraz ProgressStep i wykorzstuje go do stworzenia Step Progress Bara
export default function StepProgressBar({ navigation }) {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'#19A3E1'}}>{props.children}</Text>
  return (
    <View style={{flex: 1}}>
    <ProgressSteps>
        <ProgressStep label="First Step">
            // Tutaj we View'sie tworze sobie ActivityActivator
            <View style={{ alignItems: 'center' }}>
            <Text style={{fontFamily:'Roboto-Medium',paddingVertical:'2.5%',fontSize:20,textAlign:'center'}}><B>Witaj na ekranie nr 1 :)</B></Text>
                <ActivityIndicator size="large" color="#4bb543" />
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
             // Tutaj we View'sie tworze sobie ActivityActivator
            <View style={{ alignItems: 'center' }}>
            <Text style={{fontFamily:'Roboto-Medium',paddingVertical:'2.5%',fontSize:20,textAlign:'center'}}><B>Witaj na ekranie nr 2 :)</B></Text>
                <ActivityIndicator 
                  color = '#0892D0'
                />
            </View>
        </ProgressStep>
        <ProgressStep 
          label="Third Step" 
          finishBtnText={'Return Home'}
          onSubmit={() => navigation.navigate('HomeScreen')}
        >
            <View style={{ alignItems: 'center' }}>
                <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>Witaj na ekranie nr 3 :) tutaj kończy się progress Bar</Text>
                <Text style={{fontFamily:'Roboto-Medium',paddingVertical:'2.5%',fontSize:20,textAlign:'center'}}><B>Naciśnij Return Home w celu powrotu do menu głównego</B>      </Text>
            </View>
            // Tutaj we View'sie tworze sobie ActivityActivator
            <View>
                <ActivityIndicator 
                  color = '#f0f'
                  size="large"
                />
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>
  );
}

export const options ={
  title: 'Step Progress Bar',
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

## Styles

```js
import {StyleSheet} from 'react-native';

// style dla menu głównego
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
        height:120,
        backgroundColor:'#fa0',
    },

    text:{
      color:'white',
      fontSize:25,
      fontFamily:'AkayaTelivigala-Regular',
    }
})

//style dla listy pseudolosowych liczb
export const listStyles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: "column",
    paddingTop: 15
  },
  item: {
    marginHorizontal:10,
    marginVertical:5,
    paddingHorizontal:10,
    paddingVertical:5,
    color: "#fff",
    fontFamily:'Roboto-Medium',
    fontSize:16,
    backgroundColor: "#0892D0",
    textAlign: "center"
  },

  buttonContainer:{
    flex: 2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:2,
  },

  buttons:{
    width:'30%',
    marginHorizontal:'3.33%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0892D0',
    height:80,
    borderRadius:20,
  },

  descriptionText:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    color:'white',
    fontSize:20,
    fontFamily:'AkayaTelivigala-Regular',
  },

})
export default stylesHome
```

# Widoki

## Tak przedstawia się widok **Home**
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/1.PNG)

## Tak przedstawia się widok **LazyLoading** w trakcie ładowania:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/2.PNG)

## Tak przedstawia się widok **LazyLoading** po załadowaniu:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/3.PNG)

## Tak przedstawia się pierwszy ekran **StepProgressBar**:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/11.PNG)

## Tak przedstawia się drugi ekran **StepProgressBar**:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/5.PNG)

## Tak przedstawia się trzeci ekran **StepProgressBar**:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/10.PNG)

## Tak przedstawia się ekran **SortFilter** po załadowaniu:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/7.PNG)

## Tak przedstawia się ekran **SortFilter** po kliknięciu **randomizuj**:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/8.PNG)

## Tak przedstawia się ekran **SortFiler** po kliknięciu **sortuj**:
![](https://github.com/Reszke97/aplikacje-mobilne-Reszke-185IC/blob/master/lab3/zrzuty/9.PNG)
