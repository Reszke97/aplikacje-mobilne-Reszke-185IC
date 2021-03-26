import React ,{Component , useEffect, useState}  from 'react';
import { View, Text, ScrollView,Button, Modal,ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function(props) {
    const navigation = useNavigation();
    return <ToastScreen {...props} navigation={navigation} />;
}

const ToastButton = () => {
  const [visible, setvisible] = React.useState(false);
  const [switchOn, setswitchOn] = React.useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => setvisible(false), [visible]);

  const handleButtonPress = () => {
    setvisible(true);
  };

  const onToggleSwitch = () => {
    setswitchOn(!switchOn);
  };


  var promise = null
  const createPromise = () => {
    let time = Math.floor(Math.random()*10000)
    setTime(time)
    promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ukryj');
        }, time);
    });
  }

  return (
    <View style={{margin:'2.5%'}}>
        <Toast visible={visible} />
        <Button title="Toast and Modal" onPress={() => {
            onToggleSwitch()
            handleButtonPress()
            createPromise()
            promise.then((value) => {
                if(value == 'ukryj'){
                    setswitchOn(false)
                }
            });
        }}/>
        <Modal
            animationType="fade"
            transparent={false}
            visible={switchOn}
            onRequestClose={() => {
                setModalVisible(!switchOn);
            }}
        >
            <View >
                <View >
                    <Text onPress={onToggleSwitch} >Modal wyłączy się za:</Text>
                    <Text >{time/1000} s</Text>
                </View>
            </View>
        </Modal> 
    </View>
  );
};

const Toast = ({ visible}) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            "Toast",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
        );
    }
    return null;
};

class ToastScreen extends Component {
    render(){
        return (
            <View >
            <ScrollView style={{margin:'2.5%'}}>
                <ToastButton />
                <Text > 
                    Po kliknieciu w Button pojawi się ToastAndroid oraz Modal.
                    W modalu zostanie wyświetlony czas w sekundach. Po upływie randomowo wygenerwanego czasu zostanie on zamknięty.
                    Modal zostanie zamkniety po otrzymianiu z Promise'a wartości 'hide'
                </Text>
            </ScrollView>
            </View>
        );
    }
}

