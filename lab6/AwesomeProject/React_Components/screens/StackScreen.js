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