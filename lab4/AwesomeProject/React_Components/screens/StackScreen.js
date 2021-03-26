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