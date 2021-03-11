import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js'
import RestParameters from './RestParameters.js'
import HookUseState from './HookUseState.js'
import SpreadOperator from './SpreadOperator.js'

const Stack = createStackNavigator();

// Jako ekarn startowy naszej apki definiuje ekran "Home". Z tego ekranu będzie można dotrzeć do 3 innych ekranów.
function StackScreen({options}) {
    return(
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