import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './pages/components/StackScreen';
import {options as optionsHome} from './pages/HomeScreen'

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen 
        options={{
          optionsHome,
        }}
      >
      </StackScreen>
    </NavigationContainer>
  );
};

export default App;