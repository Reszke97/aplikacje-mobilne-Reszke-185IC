import React, {Suspense, useState} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import {ImgsStyles, ImgSlider} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

export default function SliderComponent() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  const [value, setValue] = useState(1);

  return(
    <View style={ImgsStyles.items}>
      <Text style={ImgsStyles.imgHeader}>Bulbasaur</Text>
      <Image
        style={ImgSlider(value).img}
        source={{
          uri: 'https://static.wikia.nocookie.net/pokemony/images/4/43/Bulbasaur.png/revision/latest/scale-to-width-down/1000?cb=20150824101614&path-prefix=pl'
        }}
      />
      <Slider
        value={1}
        style={{width: 400, height: 40}}
        minimumValue={0.1}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={value => setValue(value)}
      />
    </View>
  )
}
