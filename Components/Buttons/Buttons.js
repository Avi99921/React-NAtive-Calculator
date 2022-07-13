import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View,StyleSheet,Dimensions,Text } from 'react-native';
import Constants from 'expo-constants';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';


function Buttons({first,second,third,fourth,onPress}) {
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={()=>onPress(first.id)} activeOpacity="0.8" >
                <View style={styles.buttons}>
                    <Text style={styles.text} >{first.name}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPress(second.id)} activeOpacity="0.8">    
                <View style={styles.buttons}>
                    <Text style={styles.text}>{second.name}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPress(third.id)} activeOpacity="0.8">
                <View style={styles.buttons}>
                    <Text style={styles.text}>{third.name}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPress(fourth.id)} activeOpacity="0.8">
                <View style={styles.buttons}>
                    <Text style={styles.text}>{fourth.name}</Text>
                </View>
            </TouchableOpacity>
           
            
        </View>
    );
}

export default Buttons;
const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'black',
        height:hp('10%'),
        marginBottom:hp('5%'),
   
       
       
        
    },
    buttons:{
        backgroundColor:"black",
        width:wp('20%'),
        height:hp('10%'),
        marginHorizontal:wp('2.5%'),
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
      

    
    
        
    },
    text:{
        color:'dodgerblue',
        fontSize:35 ,
        fontFamily:Constants.platform.android?'notoserif':'Avenir Next',
    }
})