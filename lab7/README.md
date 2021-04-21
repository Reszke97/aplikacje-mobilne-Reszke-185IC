# Aplikacje mobilne React-Native
## Lab. nr 7 - Wykorzystanie bazy danych w aplikacji mobilnej

## Utworzyłem w sumie 6 ekranów:
- HomeScreen
- Update
- View
- View All
- Delete

Struktura plików:
```js
  ./pages
    ├── /components
    │     ├── HomeScreenButton.js                   //Guzik do ekranu HomeScreen            
    │     ├── MyButton.js                           //Guzik używany do wszystkich ekranów poza HomeScreen
    │     ├── MyTextInput.js                        //Custom'owy Text Input
    │     ├── StackNavRightHeader.js                //Plik odpowiedzialny za stylowanie navbara
    |     └── StackScreen.js              //Plik wykorzystujący Store.js, wyświetlający ekran synchronizacji danych
    ├── DeleteUser.js
    ├── HomeScreen.js                               //Plik bazowy
    ├── RegisterUser.js
    ├── styles.js                                   //style aplikacji
    ├── UpdateUser.js
    ├── ViewAllUser.js
    └── ViewUser.js
   app.js
```
