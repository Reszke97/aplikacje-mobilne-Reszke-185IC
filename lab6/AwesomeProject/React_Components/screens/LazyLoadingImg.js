import React, {Suspense, useState} from 'react';
import { View, Text,Button, TouchableOpacity, Image } from 'react-native';

const LazyComponent = React.lazy(()=> import('./ComponentToBeLoaded'));
const placeholder = require('../static/imgs/Pikachu.png')
function Placeholder(props) {
  if(props.loaded)return null
  else return <Image style={{width:400,height:320,resizeMode:'center'}} source={placeholder} />;
}

export default function LazyImage() {
  const [loaded, setLoaded] = useState(false);
  return (
    <View style={{display:'flex',flex:1}}>
      <Placeholder loaded={loaded}  />
      <Image
          style = {{width:400,height:320,resizeMode:'center'}}
          source ={{
            uri: 'https://static.wikia.nocookie.net/pokemony/images/e/e3/Squirtle.png/revision/latest/scale-to-width-down/1000?cb=20150825140513&path-prefix=pl'
          }}
          onLoad={() => {
            setLoaded(true)
        }}
      />
      <Suspense fallback = {<Text>Loading</Text>}>
        <LazyComponent/>
      </Suspense>
    </View>
  );
}