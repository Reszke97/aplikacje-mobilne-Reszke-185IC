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