import React from 'react';
import { Text, View,StyleSheet, TextInput,Dimensions,Keyboard,TouchableWithoutFeedback } from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";

function Display({data,onPress,onLongPress}) {
let Text = data;
let textArray = [];
let newTextArray = [];
//console.log("Text",Text);
if(Text=='Infinity'){
    Text='Out of range';
}else if(Text=='Error'){
    Text = 'Error';
}
else if(Text.length>=4){
    //console.log("Hello");
    if(Text!='Out of range'){
        if (Text.includes('.')){
            if(Text.indexOf('.')>3){
                const floatIndex = Text.indexOf('.');
                const afterFloatPart = Text.slice(floatIndex);
                Text = Text.slice(0,(floatIndex));
                
                textArray.push(Text.slice(-3));
                let lastIndex = Text.length - 3;
                let firstIndex = lastIndex - 3;
                while(true){
                
                    if (firstIndex <= 0) {
                        textArray.push(Text.slice(0, lastIndex));
                        break;
                }
                textArray.push(Text.slice(firstIndex, lastIndex));
                lastIndex = firstIndex;
                firstIndex = lastIndex - 3;
                }
    
                let arrayIndex = textArray.length-1;
                //console.log("Text Array--->",textArray);
                //let lastArrayIndex  = arrayIndex - textArray.length;
                while (true) {
                    newTextArray.push(textArray[arrayIndex]);
                    if(arrayIndex==0){
                        break;
                    }
                    //newTextArray.push(',');
                    
                    arrayIndex-=1;   
                }
                //console.log("=========================================");
                //console.log("New Text Array--->",newTextArray);
                arrayIndex = 0;
                Text='';
                while (true) {
                    if(arrayIndex==newTextArray.length){
                        break;
                    }
                    let concatString = newTextArray[arrayIndex]+",";
                    Text+=concatString;
                    arrayIndex+=1;
                }
                Text = Text.slice(0,(Text.length-1))+afterFloatPart;
            }else{
                Text=Text;
            }
        }else{
          
            textArray.push(Text.slice(-3));
            let lastIndex = Text.length - 3;
            let firstIndex = lastIndex - 3;
            while(true){
                
                if (firstIndex <= 0) {
                    textArray.push(Text.slice(0, lastIndex));
                    break;
                }
                textArray.push(Text.slice(firstIndex, lastIndex));
                lastIndex = firstIndex;
                firstIndex = lastIndex - 3;
            }
            let arrayIndex = textArray.length-1;
                //console.log("Text Array--->",textArray);
                //let lastArrayIndex  = arrayIndex - textArray.length;
            while (true) {
                newTextArray.push(textArray[arrayIndex]);
                if(arrayIndex==0){
                    break;
                }
                //newTextArray.push(',');
                    
                arrayIndex-=1;   
                }
                //console.log("=========================================");
                //console.log("New Text Array--->",newTextArray);
                arrayIndex = 0;
                Text='';
                while (true) {
                    if(arrayIndex==newTextArray.length){
                        break;
                    }
                    let concatString = newTextArray[arrayIndex]+",";
                    Text+=concatString;
                    arrayIndex+=1;
                }
                Text = Text.slice(0,(Text.length-1));
        }
    }
    
    //console.log(textArray);
    
    //console.log(Text.length);
    //console.log(Text);
    //console.log("=========================================");
    //console.log(Text);
    //console.log("==================================");
}


    return (
        <TouchableWithoutFeedback onLongPress={()=>onPress('delete')}  >
            <View style={styles.container} >
                <TextInput 
                    textAlign="right"
                    style={{color:"white",
                            width:'100%',
                            fontSize:Text.length>15?30:40,
                            }}
                    showSoftInputOnFocus={false}
                    editable={false}
                
                    
                    
                    
                >{Text}</TextInput>
            
            
            </View>
        </TouchableWithoutFeedback>
        
        
        
    );
}

export default Display;
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:wp('100%'),
        height:hp('10%'),
        backgroundColor:'black',
       
    },
    textinput:{
        color:"white",
        fontSize:Text.length>15?30:40,
        width:wp('100%'),
    }
})