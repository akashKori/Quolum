import React from 'react'
import MainCalc from '../view/MainCalc'
import { FIELDS, ARITHMETIC_LIST,LIGHT_THEME } from '../constant/staticField' 
import { calculateExpression, qSplit, qSqrt } from '../helper/helper'

class Dashboard extends React.Component {
  constructor(props){
      super(props)
      this.state={
         fields: null,
         callback: {
            onClick:  this.onClick,
            onClear:  this.onClear,
            onCalculate: this.onCalculate,
            setScientific: this.setScientific,
            setSign: this.setSign,
            getSquare: this.getSquare,
            getSqrt: this.getSqrt,
            setTheme: this.setTheme
         },
         result: 0,
         isScientific: false,
         theme: LIGHT_THEME
      }
      this.onClick = this.onClick.bind(this)
      this.onClear = this.onClear.bind(this)
      this.setScientific  = this.setScientific.bind(this)
      this.setSign=this.setSign.bind(this)
      this.getSquare=this.getSquare.bind(this)
      this.getSqrt=this.getSqrt.bind(this)
      this.setTheme=this.setTheme.bind(this)
  }

  componentDidMount(){
      this.setState({
        fields: FIELDS
      })
  }

  setTheme=(evt)=>{
    this.setState({
       theme: evt.target.value
    })
  }

  onClick=(evt,name,isNumeric)=>{
    const { result } = this.state
    let output = evt.target 
    if(isNumeric) {      
       let newResult = result + output.textContent
       if(result===0){
        newResult = output.textContent
      }
       this.setState({
         result: newResult
       })
    } else {
      let strLen  = result.toString().length
      if(!ARITHMETIC_LIST.includes(result.toString().charAt(strLen-1))) {     
      let newResult = result + output.value
       this.setState({
         result: newResult
       })
      }
    }
  }  

  onClear=()=>{
    this.setState({
      result:0
    })
  }

  onCalculate=()=>{
    const { result } = this.state
    let newResult = result
    String.prototype.qSplit = qSplit
    newResult= newResult.qSplit()
    Array.prototype.calculateExpression = calculateExpression
    let expVal = newResult.calculateExpression()
    this.setState({
      result: expVal
    }) 
  }

  setScientific=()=>{
    this.setState((prevState)=>{
      return {isScientific: !prevState.isScientific }
    })
  }

   setSign=()=>{
     this.setState((prevState)=>{
       return {
         result: prevState.result*-1
       }
     }) 
   }

   getSquare=()=>{
    this.setState((prevState)=>{
      return {
        result: prevState.result*prevState.result
      }
    })
   }

   getSqrt=()=>{
      const { result } = this.state
      Number.prototype.qSqrt= qSqrt
      let newResult = Number.parseInt(result).qSqrt()
      this.setState({
        result: newResult
      }) 
   }

  render() {
     const { fields, callback,result,isScientific,theme} = this.state 
      return(
      <div className={"mainCalcContainer "+ theme}>           
        <MainCalc
          fields={fields}
          callback={callback}
          result={result}
          isScientific={isScientific}
          theme={theme}
        />
      </div>      
      )}
}

export default Dashboard