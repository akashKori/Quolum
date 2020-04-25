
export const QBUTTON = "QButton"
export const QTEXT_FIELD = "QTextField"
export const NUM = "num"

export const ADD = "addition"
export const SUB = "subtraction"
export const MUL = "multiplication"
export const DIV = "division"
export const CLR = "clear"
export const EQL = "equal" 
export const SIGN = "sign"
export const SQUARE = "square"
export const SQRT = "squareRoot"
export const RESULT = "result"
export const SCIENTIFIC = "scientific"
export const ARITHMETIC_LIST = ["+", "-", "*", "/"]
export const LIGHT_THEME = "lightTheme"
export const DARK_THEME = "darkTheme"


export const FIELDS = {
    num0 : {
        key : NUM + "0" ,
        type : QBUTTON,
        label :  NUM+ "_0",
        isNumeric: true,
        onClick: "onClick" 
     },
    num1 : {
       key : NUM+ "1",
       type : QBUTTON,
       label :  NUM+ "_1",
       isNumeric: true,
       onClick: "onClick" 
    },
    num2 : {
        key : NUM+ "2",
        type : QBUTTON,
        label :  NUM+ "_2",
        isNumeric: true,
        onClick: "onClick" 
     },
     num3 : {
        key : NUM+ "3",
        type : QBUTTON,
        label :  NUM+ "_3",
        isNumeric: true,
        onClick: "onClick" 
     },
     num4 : {
        key : NUM+ "4",
        type : QBUTTON,
        label :  NUM+ "_4",
        isNumeric: true,
        onClick: "onClick" 
     },
     num5 : {
        key : NUM+ "5",
        type : QBUTTON,
        label :  NUM+ "_5",
        isNumeric: true,
        onClick: "onClick" 
     },
     num6 : {
        key : NUM+ "6",
        type : QBUTTON,
        label :  NUM+ "_6",
        isNumeric: true,
        onClick: "onClick" 
     },
     num7 : {
        key : NUM+ "7",
        type : QBUTTON,
        label :  NUM+ "_7",
        isNumeric: true,
        onClick: "onClick" 
     },
     num8 : {
        key : NUM+ "8",
        type : QBUTTON,
        label :  NUM+ "_8",
        isNumeric: true,
        onClick: "onClick" 
     },
     num9 : {
        key : NUM+ "9",
        type : QBUTTON,
        label :  NUM+ "_9",
        isNumeric: true,
        onClick: "onClick" 
     },
     addition : {
        key : "addBtn",
        type : QBUTTON,               
        onClick: "onClick",
        label: "Add (+)",
        value: "+" 
     },
     subtraction : {
        key : "subBtn",
        type : QBUTTON,     
        onClick: "onClick",
        label: "Subtract (-)",
        value: "-" 
     },
     multiplication : {
        key : "multiBtn",
        type : QBUTTON,     
        onClick: "onClick",
        label: "Multiply (*)",
        value: "*" 
     },
     division : {
        key : "divBtn",
        type : QBUTTON,     
        onClick: "onClick",
        label: "Divide (/)",
        value: "/" 
     },
     clear : {
        key : "clrBtn",
        type : QBUTTON,     
        onClick: "onClear",
        label: "Clear"
     },
     equal : {
        key : "eqlBtn",
        type : QBUTTON,     
        onClick: "onCalculate",
        label: "="
     },
     sign : {
        key : "signBtn",
        type : QBUTTON,      
        onClick: "setSign",
        label: "Sign"
     },
     square : {
        key : "sqrBtn",
        type : QBUTTON,        
        onClick: "getSquare",
        label: "Square"
     },
     squareRoot : {
        key : "sqrtBtn",
        type : QBUTTON,      
        onClick: "getSqrt",
        label: "Square root"
     },
     scientific: {
        key : SCIENTIFIC,
        type : QBUTTON,        
        onClick: "setScientific",
        label: SCIENTIFIC
     },
     result : {
        key : "result",
        type : QTEXT_FIELD,
        name :  "result"   
     },
     lightTheme: {
        key : LIGHT_THEME,
        type : QBUTTON,        
        onClick: "setTheme",
        label: "Light Theme",
        value: "lightThemeStyle"
     },
     darkTheme: {
       key : DARK_THEME,
       type : QBUTTON,        
       onClick: "setTheme",
       label: "Dark Theme",
       value: "darkThemeStyle"
     } 
}