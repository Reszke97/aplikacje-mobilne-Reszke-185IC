import * as React from 'react';
import { View, Text,Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default function StepProgressBar({ navigation }) {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'#19A3E1'}}>{props.children}</Text>
  return (
    <View style={{flex: 1}}>
    <ProgressSteps>
        <ProgressStep label="First Step">
            <View style={{ alignItems: 'center' }}>
            <Text style={{fontFamily:'Roboto-Medium',paddingVertical:'2.5%',fontSize:20,textAlign:'center'}}><B>Witaj na ekranie nr 1 :)</B></Text>
                <ActivityIndicator size="large" color="#4bb543" />
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
            <Text style={{fontFamily:'Roboto-Medium',paddingVertical:'2.5%',fontSize:20,textAlign:'center'}}><B>Witaj na ekranie nr 2 :)</B></Text>
                <ActivityIndicator 
                  color = '#0892D0'
                />
            </View>
        </ProgressStep>
        <ProgressStep 
          label="Third Step" 
          finishBtnText={'Return Home'}
          onSubmit={() => navigation.navigate('HomeScreen')}
        >
            <View style={{ alignItems: 'center' }}>
                <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>Witaj na ekranie nr 3 :) tutaj kończy się progress Bar</Text>
                <Text style={{fontFamily:'Roboto-Medium',paddingVertical:'2.5%',fontSize:20,textAlign:'center'}}><B>Naciśnij Return Home w celu powrotu do menu głównego</B></Text>
            </View>
            <View>
                <ActivityIndicator 
                  color = '#f0f'
                  size="large"
                />
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>
  );
}

export const options ={
  title: 'Step Progress Bar',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#0892D0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily:'Roboto-Black',
  },
}