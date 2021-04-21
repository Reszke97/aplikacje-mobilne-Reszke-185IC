import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import {textInput} from './styles'
import { defaultBG } from './styles'
const B = (props) => <Text style={{fontWeight: 'bold',color:'white'}}>{props.children}</Text>

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewUser = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={[defaultBG.bg,{flex:1}]}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Search User" customClick={searchUser} />
          <View style={textInput.output}>
            <Text style={[textInput.color,{borderBottomWidth:1,borderColor:'#BBBF95'}]}><B>User Id: </B>{userData.user_id}</Text>
            <Text style={[textInput.color,{borderBottomWidth:1,borderColor:'#BBBF95'}]}><B>User Name: </B>{userData.user_name}</Text>
            <Text style={[textInput.color,{borderBottomWidth:1,borderColor:'#BBBF95'}]}><B>User Contact: </B>{userData.user_contact}</Text>
            <Text style={[textInput.color,{borderBottomWidth:1,borderColor:'#BBBF95'}]}><B>User Address: </B>{userData.user_address}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;