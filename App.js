
import React, { useEffect, useState } from 'react';
import {StyleSheet, View ,StatusBar,SafeAreaView} from 'react-native';
import Display from './Components/TextInput/Display';
import Buttons from './Components/Buttons/Buttons';
import ExponentButtons from './Components/Buttons/ExponentButtons';


export default function App() {
  const [value,setValue] = useState('0');
  const [prevOperation,setPrevOperation]=useState('');
  const [preValue,setPreValue] = useState('');
  const [anyOperationTouched,setAnyOperationTouched] = useState(false);
  const [isInt,setIsInt] = useState(false);

  const addDecimalPont = (number, operation, decimal) =>{
    let newResult = "";
    if(number.indexOf('.')!=-1){
      if(number.indexOf('e')!=-1){
        const decimalPoints = number.slice(number.indexOf('+')+1);
        newResult=number.slice(0,number.indexOf('e'));
        const shiftingDecimals = decimalPoints-(decimal*2);
        const newFloatPoint = (newResult.indexOf('.')+shiftingDecimals);
        newResult=newResult.slice(0,newResult.indexOf('.'))+newResult.slice(newResult.indexOf('.')+1);
        newResult=newResult.slice(0,newFloatPoint)+"."+newResult.slice(newFloatPoint);
      }else{
        newResult = number;
      }
    }else{
      if(number.indexOf('e')!=-1){
      }
      if (operation == "+" || operation == "-") {
        if(decimal==0){
          newResult = number;
        }else{
          newResult = number.slice(0, (number.length - decimal)) + "." + number.slice((number.length - decimal));
        }
        
      } else if (operation == "*" || operation == "/") {
        if(decimal==0){
          newResult = number;
        }else{
          newResult='';
          if(number.length<(decimal*2) && number!='.'){
            let tempNumber = '.';
            let count = 0;
            while(count<((decimal*2)-number.length)){
              tempNumber=tempNumber.concat('0');
              count++;
            }
            newResult=tempNumber.concat(number);
    
          }else{
            newResult = number.slice(0, number.length - (decimal * 2)) + "." + number.slice(number.length - (decimal * 2));
            console.log('-----------NEWRSLT--------',newResult);
          }
          
        }
        
      }if(newResult.charAt(0)=='.'){
        newResult = "0".concat(newResult);
      }
      
      if(newResult.includes('.')){
        while(true){
          if(newResult.charAt(newResult.length-1)!='0'){
            break
          }else{
            newResult = newResult.slice(0,(newResult.length)-1);
          }
          
          
        }
      }
    }
    if(newResult.charAt(newResult.length-1)=='.'){
      newResult = newResult.slice(0,(newResult.length)-1);
    }
    return newResult;
  }

  const removeDecimals = (number, decimalPointsInNumber, decimal) =>{
    for (let index = 0; index < decimal - decimalPointsInNumber; index++) {
      number = number.concat("0");

    }
    return number;
  }


  const getResult = (firstNumber,secondNumber,operation) =>{
    let firstNumDecimals = 0;
    let secondNumDecimals = 0;

    let result = 0;

    if(operation=='expn'){
      console.log(Math.pow(firstNumber,secondNumber));
      result = 1;
      let count = 0;
      if(firstNumber.includes('.')){
        firstNumDecimals = (firstNumber.length-firstNumber.indexOf('.'))-1;
        firstNumber = firstNumber.replace('.','');
        while(count<secondNumber){
          result = result*firstNumber;
          count++;
        }
        console.log(firstNumDecimals**secondNumber);
        result = result.toString();
        result = result.slice(0,result.length-(firstNumDecimals*secondNumber))+'.'+result.slice(result.length-(firstNumDecimals*secondNumber));
        console.log(result.slice(0,result.length-(firstNumDecimals*secondNumber)));


      }else{
        while(count<secondNumber){
          result = result*firstNumber;
          count++;
        }
        result = result.toString();
      }
      return (Math.pow(firstNumber,secondNumber)).toString();
      
    }else{

      if (firstNumber.indexOf('.') != -1) {
        firstNumDecimals = (firstNumber.length - firstNumber.indexOf('.')) - 1;
      }
      if (secondNumber.indexOf('.') != -1) {
          secondNumDecimals = (secondNumber.length - secondNumber.indexOf('.')) - 1;
      }
      const decimals = firstNumDecimals > secondNumDecimals ? firstNumDecimals : secondNumDecimals;
      if (firstNumDecimals == decimals) {
          firstNumber = firstNumber.replace('.', '');
          secondNumber = removeDecimals(secondNumber.replace('.', ''), secondNumDecimals, decimals);
      } else if (secondNumDecimals == decimals) {
          secondNumber = secondNumber.replace('.', '');
          firstNumber = removeDecimals(firstNumber.replace('.', ''), firstNumDecimals, decimals);
      }
      if (operation == "+" || operation == "-") {
          if (operation == "+") {
              result = parseInt(firstNumber) + parseFloat(secondNumber);
          } else {
              result = parseInt(firstNumber) - parseFloat(secondNumber);
          }
      } else if (operation == "/" || operation == "*") {
          if (operation == "/") {
              result = parseInt(firstNumber) / parseFloat(secondNumber);
          } else {
              result = parseInt(firstNumber) * parseFloat(secondNumber);
              console.log("Result-------",result);
              console.log('decimals-----',decimals);

          }

      }
      result =  addDecimalPont(result.toString(), operation, decimals);
      return result;
      }


    
  }


  const vals = (item) =>{
    if(item=='delete'){
      if(value=='Infinity'){
        setValue('0');
        setPreValue('');
        setPrevOperation('');
        setAnyOperationTouched(false);
      }else{
        setValue('0');
      }
      
    }else if(item=='percent'){
      setValue((value/100).toString());
    }else if(item=='clear'){
      setValue('0');
      setPreValue('');
      setPrevOperation('');
      setAnyOperationTouched(false);
    }else if(item=='fatorial'){
      if(!(value.includes('.'))){
        let result = value;
        let number = value-1;
        while(true){
          if(number==0){
            break;
          }
          result = result*number;
          number--;
        }
        setValue(result.toString());
      }else{
        setValue("Error");
      }
      
    }else if(item=='exp'){
      if(value.includes('.')){
        const decimals = (value.length-value.indexOf('.'))-1;
        const newValue = value.replace('.','');
        let result = (newValue*newValue).toString();
        let newData = ((value*value).toString());
        if(decimals*2>20){
          result = (Math.pow(value,2)).toFixed(20).toString();
        } else{
          result = (Math.pow(value,2)).toFixed(decimals*2).toString();
        }
        
        setValue(result);

      }else{
        const newData = Math.pow(value,2);;
        setValue(newData.toString());
      }
    }else if(item=='10exp'){
      setValue(Math.pow(10,value).toString())

    }else if(item=='1/X'){
      setValue((1/value).toString());
    }else if(item=='expn'){
      setPreValue(value);
      setPrevOperation(item);
      setValue('');
    }else if(item=='root'){
      const result = Math.pow(value,1/2);
      setValue(result.toString());

    }else if(item=='+' || item=='-' || item=='/' || item=='*' || item=='eql'){
      setAnyOperationTouched(true);
      if(prevOperation.length>0){
        if(value.length>0 && preValue.length>0){
          
          let newValue = getResult(preValue,value,prevOperation);
          if(newValue.includes('.')){
            if(newValue.indexOf('.')>=15){
              setValue('Out of range');
              setPreValue('');
              setPrevOperation('');
              setAnyOperationTouched(false);
            }else{
              setValue(newValue);
              if(item=='eql'){
                setPrevOperation('');
              }else{
                setPrevOperation(item);
              };
              setPreValue('');
            }
          }else if(newValue.length>=16){
            setValue('Out of range');
            setPreValue('');
            setPrevOperation('');
            setAnyOperationTouched(false);
          }else{
            setValue(newValue);
            if(item=='eql'){
              setPrevOperation('');
            }else{
              setPrevOperation(item);
            }

            
            setPreValue('');
          }
          
        }else{
          setPrevOperation(item);
        }
      }else{
        if(item!='eql'){
          setPreValue(value);
          setPrevOperation(item);
          setValue('');
        }
        
        
      }
    } 
    else{
      if(value.length==0){
        setValue(item);
        if(anyOperationTouched){
          setAnyOperationTouched(false);
        }
      }else if(value.length>0){
        if(value.length==1 && value=='0'){
          if(item=='.'){
            const newData = value.concat(item);
            setValue(newData);
          }else{
            setValue(item);
          }
          
        }else if(value.length>=1 && value!='0'){

          if(anyOperationTouched==true){
            if(item=='.'){
              if(value.includes('.')){
                setValue(value);
              }else{
                const newData = value.concat(item);
                setValue(newData);
              }
              
            }else if(value.includes('.')){
              const newData = value.concat(item);
              setValue(newData);
            }else{
              setPreValue(value);
              setValue(item);
              setAnyOperationTouched(false);
            }
            
          }else{
            if(value.includes('.')){
              if(item!='.'){
                const newData = value.concat(item);
                setValue(newData);
              }else{
                setValue(value);
              }
              
            }else{
              const newData = value.concat(item);
              setValue(newData);
            }
          }
          

        }
        
        
        else{
          if(prevOperation.length>0){
            if(anyOperationTouched){
              setPreValue(value);
              setValue(item);
              setAnyOperationTouched(false);
            }else{
              const newData = value.concat(item);
              setValue(newData);
            }
            
          }else{
            const newData = value.concat(item);
            setValue(newData);
          }
          
        }
        
    }
    
    }
    
    
    
    
  }
  const resetData = () =>{
    console.log('Helloy');
  }

  const exponent =(value) =>{
    console.log(value);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={{backgroundColor:"white"}}>
        <Display data={value} onPress={vals}/>
      </View>
      <View style={styles.container2}>
        <ExponentButtons onPress={vals} />
        <Buttons first={{name:'7',id:"7"}} second={{name:'8',id:"8"}} third={{name:'9',id:"9"}} fourth={{name:'÷',id:'/'}} onPress={vals}/>
        <Buttons first={{name:'4',id:"4"}} second={{name:'5',id:"5"}} third={{name:'6',id:"6"}} fourth={{name:'×',id:'*'}} onPress={vals}/>
        <Buttons first={{name:'1',id:"1"}} second={{name:'2',id:"2"}} third={{name:'3',id:"3"}} fourth={{name:'+',id:'+'}} onPress={vals}/>
        <Buttons first={{name:'X!',id:'fatorial'}} second={{name:'0',id:"0"}} third={{name:'.',id:'.'}} fourth={{name:'-',id:'-'}} onPress={vals}/>   
        <Buttons first={{name:'1/X',id:'1/X'}} second={{name:'AC',id:"clear"}} third={{name:'%',id:'percent'}} fourth={{name:'=',id:'eql'}} onPress={vals}/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: 'black',
    
    alignItems:"center",

    
  },
  container3:{
    flexDirection:"column",
    width:"100%",
    borderRadius:25,
    margin:4,

    alignItems:"center",
    justifyContent:"center",
  },
  container2:{
    flex:1,
   
    width:"100%",
 
  },
  text:{
    fontWeight:"bold",
    fontSize:40
  }
})
