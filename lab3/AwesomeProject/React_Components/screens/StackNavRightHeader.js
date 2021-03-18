import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
export default({navigation}) => ({ // get reference to navigation
    title: 'Lazy Loading',
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#0892D0',
    },
    headerRightContainerStyle:{
        marginHorizontal:10,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily:'Roboto-Black',
    },
    headerRight: () => (
        <Button transparent
            onPress={() => navigation.navigate('HomeScreen')}
            title="Home"
            //color="#fff"
        />
    )
})