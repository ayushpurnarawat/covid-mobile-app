import React from 'react'
import {View,FlatList,Text,StyleSheet} from 'react-native'
import IndiaResponse from '../API/IndiaResponse'
import DisplayData from './DisplayData'
import Colorpicker from '../Functions/ColorPicker'
const TotalData = ()=>{
    const result = IndiaResponse()
    
    var  TotalData= {}
    try{
   
    TotalData={
        Confirmed:{
            data:result.statewise[0].confirmed
        },
        Active:{
            data:result.statewise[0].active
        },
        Recovered:{
            data:result.statewise[0].recovered
        },
        Deaths:{
            data:result.statewise[0].deaths
        }
    }
        }
    catch{
        console.log("catch")
    }
    return(
        <View >
            
            <FlatList
            data={Object.keys(TotalData)}
            
            renderItem={({item,index})=>{
            return (
                    <DisplayData 
                    Data={TotalData[item].data} 
                    title={item} 
                    color={Colorpicker(item)}
                    DisplayDataFor="India"/>
                )
            }}
            showsVerticalScrollIndicator={false}
            
            style={{display:"flex"}}
            
            />
        </View>
    )
}
const Styles =  StyleSheet.create({
    ViewStyle:{
        borderWidth:1,
        borderColor:'red',
        height:50
    }
})
export default TotalData