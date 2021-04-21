import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen'
import ViewUser from '../ViewUser'
import ViewAllUser from '../ViewAllUser'
import UpdateUser from '../UpdateUser'
import RegisterUser from '../RegisterUser'
import DeleteUser from '../DeleteUser'
import optionsStack from './StackNavRightHeader'

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
                name="View"
                component={ViewUser}
                options = {optionsStack}
            />
            <Stack.Screen
                name="ViewAll"
                component={ViewAllUser}
                options = {optionsStack}
            />
            <Stack.Screen
                name="Update"
                component={UpdateUser}
                options = {optionsStack}
            />
            <Stack.Screen
                name="Register"
                component={RegisterUser}
                options = {optionsStack}
            />
            <Stack.Screen
                name="Delete"
                component={DeleteUser}
                options = {optionsStack}
            />
        </Stack.Navigator>
    )
}
export default StackScreen