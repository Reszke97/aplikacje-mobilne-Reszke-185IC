import React, {Suspense} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import {ImgsStyles} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';

export default function ImgComponent() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  return(
    <View style={ImgsStyles.container}>
      <View style={ImgsStyles.items}>
        <Text style={ImgsStyles.imgHeader}>Bulbasaur</Text>
        <Image
          style={ImgsStyles.img}
          source={{
            uri: 'https://static.wikia.nocookie.net/pokemony/images/4/43/Bulbasaur.png/revision/latest/scale-to-width-down/1000?cb=20150824101614&path-prefix=pl'
          }}
        />
      </View>
      <View style={ImgsStyles.items}> 
        <Text style={ImgsStyles.imgHeader}>Pikachu</Text>
        <Image
          style={ImgsStyles.img}
          source={require('../static/imgs/Pikachu.png')}
        />
      </View>
    </View>
  )
}




