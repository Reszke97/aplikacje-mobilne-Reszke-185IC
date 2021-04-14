import React, { useState, useEffect } from "react";
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Image,Switch } from 'react-native';
import {SynchStyles} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import { set, get } from "./store";

const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

const boolMap = {
    true: true,
    false: false
};

export default function Synchronization() {
    const [message, setMessage] = useState(null);
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const setters = new Map([
      ["first", setFirst],
      ["second", setSecond],
      ["third", setThird]
    ]);
  
    // funkcja save zapisuje wartości (do API) a następnie pobiera je (z API) i zapisuje do obiektu setters
    function save(key) {
      return value => {
        set(key, value).then(
          connected => {
            setters.get(key)(value);
            setMessage(connected ? "Saved Online" : "Saved Offline");
          },
          err => {
            setMessage(err);
          }
        );
      };
    }
    
    //useEffect inicjuje informacje o sieci, oraz pobiera(z API) dane do obiektu setters
    useEffect(() => {
      NetInfo.fetch().then(() =>
        get().then(
          items => {
            for (let [key, value] of Object.entries(items)) {
              setters.get(key)(value);
            }
          },
          err => {
            setMessage(err);
          }
        )
      );
    }, []);
  
    return (
      <View style={SynchStyles.container}>
        <Text>{message}</Text>
        <View>
          <Text>First</Text>
          <Switch
            value={boolMap[first.toString()]}
            onValueChange={save("first")}
          />
        </View>
        <View>
          <Text>Second</Text>
          <Switch
            value={boolMap[second.toString()]}
            onValueChange={save("second")}
          />
        </View>
        <View>
          <Text>Third</Text>
          <Switch
            value={boolMap[third.toString()]}
            onValueChange={save("third")}
          />
        </View>
      </View>
    );
}


