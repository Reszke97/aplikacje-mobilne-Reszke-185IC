import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './React_Components/screens/StackScreen.js';
import {options as optionsHome} from './React_Components/screens/HomeScreen.js';
import {options as optionsUseState} from './React_Components/screens/HookUseState.js';
import {options as optionsRestParameters} from './React_Components/screens/RestParameters.js';
import {options as optionsSpreadOperator} from './React_Components/screens/SpreadOperator.js';

function App() {
  return (
    // Tutaj defniujemy Navigation Container czyli w tym miejscu mówimy naszej apce o istnieniu naszych komponentów
    <NavigationContainer>
      <StackScreen 
      // Tutaj w postaci zmiennej options przekazuje obiekty typu options dla react-native navigation 
      // gdzie w komponencie StackScreen zostaną wykorzystane do ostylowania Nav Headera
        options={{
          optionsHome,
          optionsUseState,
          optionsRestParameters,
          optionsSpreadOperator
        }}
      >
      </StackScreen>
    </NavigationContainer>
  );
}
export default App;