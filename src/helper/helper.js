import { ARITHMETIC_LIST } from '../constant/staticField'

export function calculateExpression(){
    let output=0
    let inputArray = this.valueOf()
    let len = inputArray.length
    for (let index =0; index < len; index++) {
      if(ARITHMETIC_LIST.includes(inputArray[index])) {
        if(index<len-1)
        output = operation(output,inputArray[index])(Number.parseFloat(inputArray[index+1]))
        index++
      } 
      else {
         output += Number.parseFloat(inputArray[index])
      }     
    }
    return output
}



export function qSplit() {
    let myString = this.valueOf()
    myString = myString.split("")
    let splitArray= []
    let str = ""
    for(let index=0;index<myString.length;index++){
       if(ARITHMETIC_LIST.includes(myString[index])){
         if(str){
            splitArray.push(str)
         }
         splitArray.push(myString[index])
         str = ""
       } else {
           str += myString[index]
       }
       if(index===myString.length-1 && str){
           splitArray.push(str)
       }
    }
    return splitArray
}

export function qSqrt() {
  let currentNumber = this.valueOf() 
  return Math.sqrt(currentNumber)
}


function operation(current, operator) {
   switch(operator){
     case '+':
     return function (input) {
        return current + input
     }
     
     case '-':
     return function (input) {
      return current - input
     }
     
     case '*':
     return function (input) {
       return current * input
     }
     case '/':
     return function (input) {
      return current / input
     }
     default: 
     return function(){
       return current
     } 
   }   
}