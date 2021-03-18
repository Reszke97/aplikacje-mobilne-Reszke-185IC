# Aplikacje mobilne React-Native
## Laboratorium nr 3 **renderowanie listy danych + obsługa progresu**

## Utworzyłem w sumie 6 ekranów
- HomeScreen
- LazyLoading
- SortFilter
- StepProgressBar(tutaj 3 ekrany do progressu)

Struktura plików:
```
  ./React_Components
    ├── /screens
    │     ├── ComponentToBeLoaded.js
    │     ├── HomeScreen.js
    │     ├── LazyLoading.js
    │     ├── SortFilter.js
    │     ├── StackNavRightHeader.js
    │     └── StackScreen.js
    |     └── StepProgressBar.js
    └── /static
          └── styles.js
   app.js
```
## Plik **HomeScreen** odpowiada za główne menu

## Plik **ComponentToBeLoaded** jest komponentem który będzie ładowany za pomocą lazy loading do innego komponentu

## Plik **LazyLoading** to komponent w którym zastoswany został **lazy laoding**

## Plik **SortFilter** to komponent w którym wykonuje się sortowanie/generacja liczb pseudolosowych

## Plik StackNavRightHeader to plik zawierający opcje dla StackNavigatora w komponencie LazyLoading z propem **navigation** aby możliwa była nawigacja z headera stack navigatora

## Plik StackScreen odpowiada za przemieszczanie się pomiędzy ekranami

## Plik StepProgressBar zawiera komponenty potrzbne do realizacji progresu krokowego
