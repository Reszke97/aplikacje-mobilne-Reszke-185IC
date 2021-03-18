import React, {Suspense} from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import {stylesOtherScreens} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';


const LazyComponent = React.lazy(()=> import('./ComponentToBeLoaded'));

export default function LazyLoading() {
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
  return (
    <View >
      <View>
        <Text style={{textAlign:'center',fontFamily:'Roboto-Medium',fontSize:20,paddingTop:10,paddingHorizontal:10}}>Hello this is The component that will call another component with lazy loading</Text>
      </View>
      <View style={{margin:10,fontFamily:'SourceSerifPro-Light'}}>
        <Suspense fallback = {<Text>Loading</Text>}>
          <LazyComponent length = {50000} />
        </Suspense>
      </View>
    </View>
  );
}



