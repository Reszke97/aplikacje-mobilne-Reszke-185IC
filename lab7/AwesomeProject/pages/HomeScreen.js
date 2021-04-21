import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import HomeScreenButton from './components/HomeScreenButton'
import { openDatabase } from 'react-native-sqlite-storage';
import stylesHome from './styles.js'

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        // sprawdzenie czy bazie danych sqllite master znajduje sie baza danych z tabela o nazwie 'table_user'
        function (tx, res) {
          console.log('item:', res.rows.length);
          // jesli baza danych posiada zero rekordów to zostanie stworzona
          // jesli baza danych posiada juz rekordy to została już wczytana
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <SafeAreaView style={[stylesHome.parentContainer,{backgroundColor:'#05ACD3'}]}>
      <View style={stylesHome.items}>
        <HomeScreenButton
          title="Register"
          customClick={() => navigation.navigate('Register')}
        />
        <HomeScreenButton
          title="Update"
          customClick={() => navigation.navigate('Update')}
        />
        <HomeScreenButton
          title="View"
          customClick={() => navigation.navigate('View')}
        />
        <HomeScreenButton
          title="View All"
          customClick={() => navigation.navigate('ViewAll')}
        />
        <HomeScreenButton
          title="Delete"
          customClick={() => navigation.navigate('Delete')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

export const options ={
  title: 'Home',
  color:'black',
  headerStyle: {
    backgroundColor: '#0486DB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: "200",
    fontFamily:'Roboto-Black',
    fontSize: 35,
    alignSelf: 'center',
  },
}