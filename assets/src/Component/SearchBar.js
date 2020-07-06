import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'
const SearchBar = ()=>{
    return(
        <View style={Styles.background}>     
        <Feather name="search"  style={Styles.IconStyle}/>   
        <TextInput 
            placeholder="Search" 
            style={Styles.InputStyle}
            // value={Term}
            // onChangeText={(newterm)=>OnTermChange(newterm)}
            // onEndEditing={OnTermSubmitted}
        />
        </View>

    )
}
const Styles = StyleSheet.create({
    background:{
        // backgroundColor:"rgb(27,27,24)",
        backgroundColor:'white',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginVertical:15,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignSelf:"center",
        marginTop:40
    },
    InputStyle:{
        
        flex:1,
        fontSize:18
    },
    IconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15,
        color:'gray'
    }
})
export default SearchBar