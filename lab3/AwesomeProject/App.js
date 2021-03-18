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