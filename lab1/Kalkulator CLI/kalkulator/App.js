import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';
import styles from './style.js';

class App extends Component{
  constructor(){
    super()
    this.state = {
      result:"",
      calculationText:"0",
    }
    this.chars = ['+','-','/','*','e']
  }

  /*funkcja gdy nacisniemy '=' */
  calculateResult(){
    const text = this.state.result
    this.setState({
      calculationText:eval(text)
    })
  }

  /*funkcja dla wszsytkich operatorow logicznych poza '=' */
  operate(operation){
    switch(operation){
      case 'DEL':
        let text = this.state.result.split('')
        text.pop()
        this.setState({
          result: text.join('')
        })
        break;
      case 'AC':
        this.setState({
          result: "",
          calculationText:"0",
        })
        break;
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
  buttonPressed(value){
    const lastChar = this.state.result.split('').pop()
    if(value == '='){
      //validate musi zwrocic true
      return this.validate() && this.calculateResult()
    }
    else if(value == '.'){
      if(this.state.result == '')return
      if(lastChar =='.') return
      this.setState({
        result: this.state.result + value
      })
    }
    else{
      this.setState({
        result: this.state.result+value,
      })
    }
  }

  render(){
    var rows = []
    var numbers =[['AC','DEL','**'],[1,2,3], [4,5,6], [7,8,9],['.',0,'=']]

    for(let i = 0; i<5; i++){
      var row = []
      for(let j = 0; j < 3; j++){
        // 'AC', 'DEL', '**'
        if(i==0){
          row.push(
            <TouchableOpacity onPress={() => this.operate(numbers[i][j])} style={styles.btn}>
              <Text style={[styles.btnText, styles.orangeText]}>{numbers[i][j]}</Text>
            </TouchableOpacity>
          )
        }
        else{
          // tutaj tylko guziki i '=' oraz ','
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
    let operations=[]
    for(let i = 0; i < 5;i++){
      operations.push(
        <TouchableOpacity style={styles.btn} onPress={()=> this.operate(this.chars[i])}>
          <Text style={[styles.btnText, styles.orangeText]}>{this.chars[i]}</Text>
        </TouchableOpacity>
      )
    }

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