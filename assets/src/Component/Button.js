import React from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
const ScreenWidth = Dimensions.get('window').width
const ButtonJs = ({click})=>{
    console.log("BUttton","///////////////////////")
    return(
        <View>
            <TouchableOpacity style={Styles.ButtonStyle} onPress={click}>
            <Text style={Styles.TextStyle}>
                Statewise
            </Text>
            </TouchableOpacity>
            
        </View>
    )
}
const Styles = StyleSheet.create({
    ButtonStyle:{
        height:50,
        width:ScreenWidth-5,
        backgroundColor:'rgb(111,108,170)',
        borderRadius:20,
        marginTop:5
    
    },
    TextStyle:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        alignSelf:'center',
        marginTop:5
    }
})
export default ButtonJs