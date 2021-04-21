import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

const B = (props) => <Text style={{fontWeight: 'bold',color:'white'}}>{props.children}</Text>

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewAllUser = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{ backgroundColor: 'white', padding: 20 }}>
        <Text style={{borderBottomWidth:1,borderColor:'#BBBF95'}}><B>Id: </B>{item.user_id}</Text>
        <Text style={{borderBottomWidth:1,borderColor:'#BBBF95'}}><B>Name: </B>{item.user_name}</Text>
        <Text style={{borderBottomWidth:1,borderColor:'#BBBF95'}}><B>Contact: </B>{item.user_contact}</Text>
        <Text style={{borderBottomWidth:1,borderColor:'#BBBF95'}}><B>Address: </B>{item.user_address}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex:1,backgroundColor:'#0486DB'}}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewAllUser;