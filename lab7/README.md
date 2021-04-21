# Aplikacje mobilne React-Native
## Lab. nr 7 - Wykorzystanie bazy danych w aplikacji mobilnej

## Utworzyłem w sumie 6 ekranów:
- HomeScreen
- Update
- View
- View All
- Delete
- Register

Struktura plików:
```js
  ./pages
    ├── /components
    │     ├── HomeScreenButton.js                   //Guzik do ekranu HomeScreen            
    │     ├── MyButton.js                           //Guzik używany do wszystkich ekranów poza HomeScreen
    │     ├── MyTextInput.js                        //Custom'owy Text Input
    │     ├── StackNavRightHeader.js                //Plik odpowiedzialny za stylowanie navbara
    |     └── StackScreen.js                        //Komponent do umożliwiający przechodzenie pomiędzy ekranami
    ├── DeleteUser.js                               //Plik umożliwwijący usunięcie user'a z bazy danych
    ├── HomeScreen.js                               //Ekran Główny
    ├── RegisterUser.js                             //Plik umożliwwijący dodanie user'a do bazy danych
    ├── styles.js                                   //style aplikacji
    ├── UpdateUser.js                               //Plik umożliwiający 
    ├── ViewAllUser.js                              //Plik wyświetlający wszystkie rekordy z bazy danych
    └── ViewUser.js                                 //plik wyświetlający wybranego user'a
   app.js
```

## Słowem wstępu aplikacja napisana jest w **React Native-Cli** z wykorzystaniem bazy danych **SQLlite** przy użyciu modułu ```import { openDatabase } from 'react-native-sqlite-storage'```. Baza danych tworzona jest w momencie uruchomienia, logika zdefiniowana jest w pliku **HomeScreen** czyli od razu gdy włączamy aplikacje i wyświetla nam się Ekran główny. Następnie baza danych jest gotowa do wykonwywania na niej operacji tj. usuwanie, dodawanie, edytowanie.

## Tak przedstawia się plik **styles.js**
```js

```