import React from 'react'
import BuildField from '../logic/BuildField'
import { SQRT, SQUARE, SIGN } from '../constant/staticField'
import '../style/dashboard.css'

const ScientificCalc=props=> {
   return (<div className="calcRow">              
                {BuildField.field(SIGN, {...props})}
                {BuildField.field(SQUARE, {...props})}
                {BuildField.field(SQRT, {...props})}        
       </div>)

}
export default ScientificCalc