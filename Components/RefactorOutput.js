const RefactorOutPut = (Text) => {
    let textArray = [];
    let newTextArray = [];
    if(Text.length>=4 && Text!='Out of range'){
        if (Text.includes('.')){
            if(Text.indexOf('.')>3){
                const floatIndex = Text.indexOf('.');
                Text = Text.slice(0,(floatIndex-3))+","+Text.slice(floatIndex-3);
            }
        }else{
            textArray.push(Text.slice(-3));
            let lastIndex = Text.length - 3;
            let firstIndex = lastIndex - 3;
            while (true) {
                
                if (firstIndex <= 0) {
                    textArray.push(Text.slice(0, lastIndex));
                    break;
                }
                textArray.push(Text.slice(firstIndex, lastIndex));
                lastIndex = firstIndex;
                firstIndex = lastIndex - 3;
    }
        }
        //console.log(textArray);
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
        //console.log(Text.length);
        console.log(Text);
        //console.log("=========================================");
        //console.log(Text);
        //console.log("==================================");
    }
    
}