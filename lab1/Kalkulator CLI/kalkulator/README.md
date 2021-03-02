# Aplikacja napisana w React-CLI
## Do przygotowania React-CLI wykorzystałem stronę https://reactnative.dev/docs/environment-setup. Dodatkowo zainstalowałem Android Studio do korzystania z emulatora na system android. Po skonfigurowaniu Z dokumentacji react-native należało również doinstalować **Java JDK** oraz podać utowrzyć zmienną środowiskową **JAVA_HOME** zazwyczaj jest to następująca scieżka: **C:\Program Files\Java\jdk-15.0.2**. Oraz dodatkowo https://stackoverflow.com/questions/35000729/android-studio-could-not-initialize-class-org-codehaus-groovy-runtime-invokerhel zmienić opcje w **gradle/wrapper/gradle-wrapper.properties.** na **distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip**.

## Po końcowej konfiguracji przeszedłem do realizacji zadania.

## Tak przedstawia się gotowa aplikacja:
![](1)

## Aplikacje podzieliłem na 2 pliki: **style.js** do stylów oraz **app.js** z całą logiką.

## Tak przedstawia się plik **style.js**:

```JS
import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
    //główny kontener
    container: {
      flex: 1
    },
  
    calculationText:{
      fontSize: 28,
      color: 'black',
      fontWeight: 'bold'
    },
  
    resultText:{
      fontSize:25,
      color:'black'
    },
  
    //kontener na obliczenia
    result:{
      flex: 2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems:'flex-end'
    },
  
    //kontener na wynik
    calculation: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems:'flex-end'
    },
  
    // kontener na guziki
    buttons: {
      flexGrow: 7,
      flexDirection: 'row'
    },
    
    //wszystkie liczby i =,.
    numbers: {
      flex: 3,
      backgroundColor: 'white',
      borderStyle:'solid',
      borderColor:'gray',
      borderTopWidth: 2
    },
  
    //pionowa czesc operatorow
    operations:{
      flex: 1,
      backgroundColor: 'white',
      justifyContent:'space-around',
      alignItems:'center',
      borderStyle:'solid',
      borderColor:'gray',
      borderTopWidth: 2
    },
  
    // kontener dla 1 rzadku guzikow
    row:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
  
    // guzik wewnatrz rzadku
    btn:{
      flex: 1,
      //centruje po osi X
      alignItems:'center',
      alignSelf:'stretch',
      //centruje po osi Y
      justifyContent:'center',
      color:'red'
      /*borderStyle:'solid',
      borderWidth: 1*/
    },
  
    btnText:{
      fontSize: 30,
    },
  
    orangeText:{
      color:'orange',
      fontSize: 30,
    },
  
  })

export default styles
```

## Tak przedstawia się klasa **app.js**
```js
import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';
import styles from './style.js';

class App extends Component{
  constructor(){
    super()
    this.state = {
      result:"", //tutaj przechowywane beda znaki czyli obliczenia
      calculationText:"0", // tutaj przechowywany jest wynik
    }
    this.chars = ['+','-','/','*','e']// tablica w której znajduje się część znaków
  }

  /*funkcja gdy nacisniemy '=' */
  calculateResult(){                    // Funkcja obliczającą równanie
    const text = this.state.result
    this.setState({
      calculationText:eval(text)
    })
  }

  /*funkcja dla wszsytkich operatorow logicznych poza '=' */
  operate(operation){
    switch(operation){
                                        // Gdy wciśniemy DEL zostanie usunięty ostatni znak
      case 'DEL':
        let text = this.state.result.split('')
        text.pop()
        this.setState({
          result: text.join('')
        })
        break;
                                        // Gdy wciśniemy AC zostanie wyczyszczony cały ekran
      case 'AC':
        this.setState({
          result: "",
          calculationText:"0",
        })
        break;
        // Gdy klikniemy któreś z poniższych znaków to zostaną one dodano dodatkowo jest tam zabezpieczenie przed dodaniem operatoru wiecej niz 1 raz po sobie
      case '+':
      case '*':
      case '-':
      case '/':
      case '**':
      case 'e':

      // najpierw dzielimy string na znaki pojedyncze a nakoniec pobieramy ostatni znak
      const lastChar = this.state.result.split('').pop()
      // jesli ten znak zostanie znaleziony to funkcja nie zadziala
      if(this.chars.indexOf(lastChar)!= -1)return
      // jesli nic nie jest wpisane to wychodzi z funkcji w przeciwnym razie dodany zostanie operator
      if(this.state.result == ''){
        // jesli jednym z tych operatorow jest '-' to może on przejść ponieważ liczba może zaczynać się od -n
        if(operation=='-'){
          this.setState({
            result: this.state.result + operation
          })
        }
        return
      }
      this.setState({
        result: this.state.result + operation
      })
    }
  }
    
       // funkcja sprawdzająca czy po kliknięciu znaku '=' nie ma tam niczego innego poza liczbami zwraca true jeśli warunek jest spełniony inaczej daje false
  validate(){
    const text = this.state.result
    //slice z minusowa wartosc wyciaga tyle znakow z tablicy ile jest po znaku '-'
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
      case '**':
        return false
    }
    return true
  }
  
  /*liczby od 1-9,',','='*/
    // funkcja ta odpowiada gdy nacisniemy na cyfre lub znak '=' lub ','
  buttonPressed(value){
    const lastChar = this.state.result.split('').pop()
    if(value == '='){
      //validate musi zwrocic true
      return this.validate() && this.calculateResult()
    }
    else if(value == '.'){
        // tutaj dodatkowo dodałem '.' aby można było z niej korzystać
      if(this.state.result == '')return
      if(lastChar =='.') return
      this.setState({
        result: this.state.result + value
      })
    }
    // ten else zostanie wybierzemy liczbe lub '.'
    else{
      this.setState({
        result: this.state.result+value,
      })
    }
  }

  render(){
    // ta część kodu generuje tylko 1 rządek czyli ['AC','DEL','**']
    var rows = []
    var numbers =[['AC','DEL','**'],[1,2,3], [4,5,6], [7,8,9],['.',0,'=']]
    for(let i = 0; i<5; i++){
      var row = []// ta tablica zostanie wyswietlona we View i dzieki niej rzadki zostana wyswietlone
      for(let j = 0; j < 3; j++){
        // 'AC', 'DEL', '**'
        if(i==0){
            // do tablicy dodaje element TouchableOpacity oraz event onPress i przekazuje tam odpowiednią wartość
          row.push(
            <TouchableOpacity onPress={() => this.operate(numbers[i][j])} style={styles.btn}>
              <Text style={[styles.btnText, styles.orangeText]}>{numbers[i][j]}</Text>
            </TouchableOpacity>
          )
        }
        else{
          // tutaj tylko guziki i '=' oraz ','
          // do tablicy dodaje element TouchableOpacity oraz event onPress i przekazuje tam odpowiednią wartość
          row.push(
          <TouchableOpacity onPress={() => this.buttonPressed(numbers[i][j])} style={styles.btn}>
            <Text style={styles.btnText}>{numbers[i][j]}</Text>
          </TouchableOpacity>
          )
        }
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }


    /*operatory logiczne*/
    // Ta część odpowiada za pionowy pomarańczowy rządek
    let operations=[]
    for(let i = 0; i < 5;i++){
      // tak samo jak wcześniej dodaje element TouchableOpacity event onPress i przekazuje tam odpowiednią wartość tym razem wywołana zostanie inna metoda
      operations.push(
        <TouchableOpacity style={styles.btn} onPress={()=> this.operate(this.chars[i])}>
          <Text style={[styles.btnText, styles.orangeText]}>{this.chars[i]}</Text>
        </TouchableOpacity>
      )
    }
    
    // W returnie zwracane są widoki i w nawiasach klamrowych {} przekazane wartości z rendera, które później zostaną wyświetlone
    return(
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.result}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
           {operations}
          </View>
        </View>
      </View>
    );
  }
}
export default App;
```

