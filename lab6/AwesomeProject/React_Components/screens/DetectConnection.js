import React, {Suspense, Component, useState, useEffect} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Animated, TouchableHighlight } from 'react-native';
import {DetectConnection} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-swipeable';
import { RectButton } from 'react-native-gesture-handler';
import NetInfo from "@react-native-community/netinfo";

const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
export default function Swipe() {
  var string = ""
  const [connected, setConnected] = useState("");
  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connection);
    }
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);
    return () => {
      unsubscribe();
    };
  }, []);
  if(connected==""){
    return(
      <View>
        <Text>Loading</Text>
        <Text>Loading</Text>
        <Text>Loading</Text>
        <Text>Loading</Text>
        <Text>Loading</Text>
      </View>
    )
  }
  else{
    return(
      <View style={DetectConnection.parentContainer}>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>Connection type: {connected.type}</Text>
        </View>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>Internet Connection: {(() => {
              if (connected.isConnected) {
                string = "Established"
              }
              else string = "Not established"
            })()}
            {string}
          </Text >
        </View>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>frequency: {(() => {
              if (!connected.isConnected) {
                string = "Not Connected"
              }
              else string = `${connected.details.frequency}Mhz`
            })()}
            {string}
          </Text>
        </View>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>ip: {(() => {
              if (!connected.isConnected) {
                string = "Not Connected"
              }
              else string = `${connected.details.ipAddress}`
            })()}
            {string}
          </Text>
        </View>
        <View style={DetectConnection.items}>
          <Text style={DetectConnection.text}>strength: {(() => {
              if (!connected.isConnected) {
                string = "Not Connected"
              }
              else string = `${connected.details.strength}%`
            })()}
            {string}
          </Text>
        </View>
      </View>
    )
  }
}
