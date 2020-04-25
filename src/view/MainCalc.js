import React from 'react'
import BuildField from '../logic/BuildField'
import { NUM, ADD, SUB, CLR, RESULT, MUL, EQL, DIV, SCIENTIFIC,LIGHT_THEME,DARK_THEME } from '../constant/staticField'
import ScientificCalc from './ScientificCalc'
import '../style/dashboard.css'

const MainCalc = props => {    
   const { isScientific } = props
    return (<div className="mainCalc">     
        <div className="calcRow"> 
          {BuildField.field(SCIENTIFIC, {...props})} 
          {BuildField.field(LIGHT_THEME, {...props})}
          {BuildField.field(DARK_THEME, {...props})}         
        </div> 
        <div className="calcRow">
          {BuildField.field(RESULT, {...props})}
        </div>        
        <div className="calcRow"> 
          {BuildField.field(NUM+"1", {...props})}
          {BuildField.field(NUM+"2", {...props})}
          {BuildField.field(NUM+"3", {...props})}
          {BuildField.field(ADD, {...props})}
        </div>
        <div className="calcRow">
          {BuildField.field(NUM+"4", {...props})}
          {BuildField.field(NUM+"5", {...props})}
          {BuildField.field(NUM+"6", {...props})}
          {BuildField.field(SUB, {...props})}
        </div>        
        <div className="calcRow">
          {BuildField.field(NUM+"7", {...props})}
          {BuildField.field(NUM+"8", {...props})}
          {BuildField.field(NUM+"9", {...props})}
          {BuildField.field(MUL, {...props})}
        </div>
        <div className="calcRow">
          {BuildField.field(CLR, {...props})}
          {BuildField.field(NUM+"0", {...props})}
          {BuildField.field(EQL, {...props})}
          {BuildField.field(DIV, {...props})}
        </div>
        <div className="calcRow">
           {isScientific? <ScientificCalc {...props} /> : null}
          </div>        
    </div>)
}


export default MainCalc