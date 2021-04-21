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
