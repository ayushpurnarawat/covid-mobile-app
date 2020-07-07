import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const RowData =({StateName,ConfirmedCases,ActiveCases,RecoverCases,DeathCases})=>{
    return(
        <View style={{flexDirection:'row',marginLeft:5}}   >
            <Text style={Styles.StateStyle}>{StateName}</Text>
            <Text style={Styles.ConfirmStyle}>{ConfirmedCases}</Text>
            <Text style={Styles.ActiveStyle}>{ActiveCases}</Text>
            <Text style={Styles.RecoverStyle}>{RecoverCases}</Text>
            <Text style={Styles.DeathStyle}>{DeathCases}</Text>
        </View>
    )
}
const Styles= StyleSheet.create({
    ViewStyle:{
    
    },
    StateStyle:{
        // borderWidth:1,
        // borderColor:'black',
        marginTop:4,
        width:200,
        backgroundColor:'transparent',
        color:'white',
        fontWeight:'bold',
        borderRadius:5,
        marginRight:3

    },
    ConfirmStyle:{
        // borderWidth:1,
        // borderColor:'black',
        marginTop:4,

        width:90,
        backgroundColor:'transparent',
        color:"white",
        fontWeight:'bold',
        borderRadius:5,
        marginRight:3,
        marginLeft:2
        
    },
    ActiveStyle:{
    //    borderWidth:1,
    //     borderColor:'black',
    marginTop:4,

        width:90,
        backgroundColor:'transparent',
        color:'white',
        fontWeight:'bold',
        borderRadius:5,
        marginRight:3,
    },
    RecoverStyle:{
        // borderWidth:1,
        // borderColor:'black',
        marginTop:4,

        width:90,
        backgroundColor:'transparent',
        color:'white',
        fontWeight:'bold',
        borderRadius:5,
        marginRight:3,
    },
    DeathStyle:{
        // borderWidth:1,
        // borderColor:'black',
        marginTop:4,

        width:90,
        backgroundColor:'transparent',
        color:'white',
        
        fontWeight:'bold',
        borderRadius:5,
        marginRight:3,
    },

})
export default RowData