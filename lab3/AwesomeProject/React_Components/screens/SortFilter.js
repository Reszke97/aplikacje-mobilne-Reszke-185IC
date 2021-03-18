//import * as React from 'react';
import React, {Component, useState} from 'react';
import { View, Text,Button, TouchableOpacity, FlatList } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import {listStyles} from '../static/styles.js';

export default function(props) {
  const navigation = useNavigation();
  return <SortFilter {...props} navigation={navigation} />;
}

const B = (props) => <Text style={{fontWeight: 'bold',color:'orange'}}>{props.children}</Text>
const C = (props) => <Text style={{fontWeight: 'bold',color:'#8d43b5'}}>{props.children}</Text>

export class SortFilter extends Component{
  constructor(){
    super()
    this.state = {
      array: new Array(100).fill(10).map((v, i) => ({ key: i.toString(), value: `${v}` })),
    }
    this._array = new Array(100).fill(10);
  }

  Randomize(event) {
    for(let i = 0; i<100;i++){
      this._array[i] = (Math.floor(Math.random() * 1000)+1);
    }

    this.setState({
      array:this._array.map((v, i) => ({ key: i.toString(), value: `${v}` })),
    })
  }

  Sort(event){
    this._array.sort((a,b) => a > b ? 1:-1)
    this.setState({
      array:this._array.map((v, i) => ({ key: i.toString(), value: `${v}` }))
    })
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={listStyles.container}>
          <FlatList
            data={this.state.array}
            renderItem={({ item }) => <Text style={listStyles.item}>liczba: <B>{item.value}</B> element nr : <C>{item.key}</C></Text>}
          />
        </View>
        <View style={listStyles.buttonContainer}>
            <TouchableOpacity style={listStyles.buttons} onPress={this.Randomize.bind(this)}>
              <Text style={listStyles.descriptionText}>Randomizuj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={listStyles.buttons} onPress={this.Sort.bind(this)}>
              <Text style={listStyles.descriptionText}>Sortuj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={listStyles.buttons} onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={listStyles.descriptionText}>Home</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export const options ={
  title: 'Sortowanie i Filtrowanie',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#0892D0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily:'Roboto-Black',
  },
}