import React from 'react';
import { Text,StyleSheet,TouchableOpacity,View} from 'react-native';
import Constants from 'expo-constants';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

function ExponentButtons({onPress}) {
    //console.log(Constants)
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={()=>onPress('exp')} activeOpacity="0.8" >
                <View style={styles.buttons}> 
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={styles.text}>X</Text>
                        <Text style={styles.text1}>2</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPress('expn')} activeOpacity="0.8" >
                <View style={styles.buttons}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={styles.text}>X</Text>
                        <Text style={styles.text1}>n</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPress('root')} activeOpacity="0.8" >
                <View style={styles.buttons}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={styles.text}>√</Text>
                    </View>    
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPress('10exp')} activeOpacity="0.8" >
                <View style={styles.buttons}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={styles.text}>10</Text>
                        <Text style={styles.text1}>x</Text>
                    </View>  
                </View>
            </TouchableOpacity>   
        </View>
    );
}

export default ExponentButtons;
const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'black',
        marginBottom:hp('5%'),
        height:hp('10%'),
       
        
        
       
       
        
    },
    buttons:{
        backgroundColor:"black",
        /*borderRadius:Dimensions.get('screen').width/4,*/
        width:wp('20%'),
        height:hp('10%'),
        marginHorizontal:wp('2.5%'),
        justifyContent:"center",
        alignContent:"center",
        alignItems:'center',
        flexDirection:'row',
        borderColor:'royalblue',
        
        
    },
    text:{
        fontSize:Constants.platform.android?30:30,
        fontFamily:Constants.platform.android?'notoserif':'Avenir Next',
        lineHeight:35,
        color:"dodgerblue",
        
    },
    text1:{
        fontSize:Constants.platform.android?18:18,
        fontFamily:Constants.platform.android?'notoserif':'Avenir Next',
        lineHeight:Constants.platform.android?18:20,
        color:"dodgerblue",
        
    }

})