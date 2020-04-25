import React from 'react'
import '../style/dashboard.css'

export default class {
   
    static field(name, props) {
       try {
       if(props) {  
       const {fields} = props
       if(fields && fields[name]){       
          return this[fields[name].type](name,props)
          }
         } 
       } catch (ex) {
           console.log(ex)
       }
   }

   static QTextField(name,props) {
     const { fields, result } = props  
     const { key } = fields[name]
     let inputType = "text"
     if (fields && fields["inputType"]) {
        inputType = fields["inputType"]
     }
    return(
    <div className="textContainer">
        <input 
                name={name}
                key={key}               
                type={inputType}
                value={result}                               
        />
     </div> )
   } 

   static QButton(name,props) {
     const { callback, fields, theme } = props
     const {  isNumeric, label, value, key } = fields[name]
     let labelTxt = label
     if(isNumeric){
       labelTxt = label.split("_")[1] 
     } 
    return(<div className="btnContainer ">
             <button               
               name={name}
               key={key}
               onClick={(evt) => {callback[fields[name].onClick](evt, name, isNumeric)}}    
               value={value}
               className={theme}
             >
              {labelTxt}
            </button>
          </div> 
       )     
   }
}