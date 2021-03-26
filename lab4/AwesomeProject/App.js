import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './React_Components/screens/StackScreen.js';
import {options as optionsHome} from './React_Components/screens/HomeScreen.js';

function App() {
  return (
    // Tutaj defniujemy Navigation Container czyli w tym miejscu mówimy naszej apce o istnieniu naszych komponentów
    <NavigationContainer>
      <StackScreen 
        options={{
          optionsHome,
        }}
      >
      </StackScreen>
    </NavigationContainer>
  );
}
export default App;