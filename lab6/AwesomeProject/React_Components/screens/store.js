import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";

// Ten komponent tworzy tak jabky "symulacje(fake)" danych sieci za pomocą obiektu fakeNetworkData
const fakeNetworkData = {
  first: false,
  second: false,
  third: false
};

let connected = false;

// pod tablicą unsynced przechowywane będą dane czekające na zsynchronizowanie po tym jak
// połączymy się z internetem
const unsynced = [];


// Funkcja działa na takiej zasadzie ze przekaywane są do niej pary: Klucz i Wartość
// Jeśli mamy dostęp do internetu to dane (zostałyby przekazane i zapisane za pomocą internetu)
// Jeśli brak dostępu do internetu to dane zostaną zapisane lokalnie za pomocą AsyncStorage
export function set(key, value) {
  return new Promise((resolve, reject) => {
    if (connected) {
      // jeśli jesteśmy połączeni to mapujemy z klucza do naszego obiektu fakeNetworkData wartość za pomocą promise'ów
      fakeNetworkData[key] = value;
      resolve(true);
    } else {
      // brak połączenia oznacza zapisanie danych do AsyncStorage
      AsyncStorage.setItem(key, value.toString()).then(
        () => {
          //Dodajemy dane do tablicy niezsynchronizowanych danych
          unsynced.push(key);
          resolve(false);
        },
        err => reject(err)
      );
    }
  });
}

// Tak jak w przypadku dla metody set jeśli jesteśmy połączeni to wartość zostanie pobrana z internetu(prawdopodobnie z API)
// W przeciwnym razie korzystamy z AsyncStorage do pobrania danych
export function get(key) {
  return new Promise((resolve, reject) => {
    if (connected) {
      // jeśli podano klucz to zostanie zwrócony element znajdujący się pod tym kluczem
      // w przeciwnym razie zwrócone zostaną wszystkie wartości
      resolve(key ? fakeNetworkData[key] : fakeNetworkData);
      // jeśli nie mamy dostępu do sieci to ale podaliśmy klucz to ten element zostanie
      // zwrócony z AsyncStorage
    } else if (key) {
      AsyncStorage.getItem(key).then(
        item => resolve(item),
        err => reject(err)
      );
      // jeśli nie mamy dostępu do sieci oraz nie podaliśmy klucza to zwrócone zostaną
      // wszystkie wartości
    } else {
      AsyncStorage.getAllKeys().then(
        keys =>
          AsyncStorage.multiGet(keys).then(
            items => resolve(Object.fromEntries(items)),
            err => reject(err)
          ),
        err => reject(err)
      );
    }
  });
}

// Ta funkcja odpowiada za ustawienie zmiennej connected na dostęp do sieci lub brak dostępu
NetInfo.fetch().then(
  connection => {
    connected = ["wifi", "unknown"].includes(connection.type);
  },
  () => {
    connected = false;
  }
);

// Ten event listener odpowiada za automatyczną zmianę połączenia i jeśli jesteśmy połączeni
// i mamy jakieś niezsynchronizowane elementy to tutaj właśnie zostanie to wykonane poprzez
// wywołanie metody set() a wcześniej pobranie danych z AsyncStorage i po synchronizacji
// usunie dane z tablicy unsynced
NetInfo.addEventListener(connection => {
  connected = ["wifi", "unknown"].includes(connection.type);

  if (connected && unsynced.length) {
    AsyncStorage.multiGet(unsynced).then(items => {
      items.forEach(([key, val]) => set(key, val));
      unsynced.length = 0;
    });
  }
});