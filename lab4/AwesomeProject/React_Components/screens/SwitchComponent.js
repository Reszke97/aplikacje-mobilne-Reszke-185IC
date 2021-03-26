import React, { useState } from "react";
import { View, Switch, StyleSheet,Modal,Pressable,Text } from "react-native";
import {SwitchComp} from '../static/styles.js';

export default function SwitchComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={SwitchComp.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={SwitchComp.containerModal}>
          <View style={SwitchComp.containerModalWrapper}>
            <Text style={SwitchComp.text}>Schowaj modal</Text>
            <Switch value={modalVisible} onValueChange={() => setModalVisible(false)}/>
          </View>
        </View>
        <View style={SwitchComp.outputContainer}>
          <Text style={SwitchComp.output}>{Math.floor(Math.random()*23)}</Text>
        </View>
      </Modal>
      <Text style={SwitchComp.text}>Wyświetlenie pseudolosowej liczby</Text>
      <Switch style={SwitchComp.items} value={modalVisible} onValueChange={() => setModalVisible(true)}/>
    </View>
  );
};