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