import React, {useState} from 'react';
import {View, Button, Platform, Text, TouchableOpacity, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {dateTime} from '../static/styles.js';

export default function DateTime() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    alert(currentDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <View style={dateTime.container}>
        <TouchableOpacity style={dateTime.touchOpac} onPress={showDatepicker}>
          <Text style={dateTime.text}>
            Wybierz Datę
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={dateTime.touchOpac} onPress={showTimepicker}>
          <Text style={dateTime.text}>
            Wybierz Godzinę
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={dateTime.container}>
        <Text style={dateTime.textOutput}>Data: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
        <Text style={dateTime.textOutput}>Godzina: {date.getHours()}:{date.getMinutes()}</Text>
      </View>
      <View >
        <Text style={dateTime.description}>Wybieranie daty za pomocą komponentu <B>DateTimePicker</B></Text>
        <Text style={dateTime.description}>Domyślnie na początku ustawiona jest data początkowa. Po kliknięciu w odpowiedni guzik pokazują się nam okienka 
          z wyborem daty i godziny.Po wybraniu wskazanej wartości pokazuje się alert oraz data i godzinia również na ekranie.
        </Text>
      </View>
    </>
  );
};