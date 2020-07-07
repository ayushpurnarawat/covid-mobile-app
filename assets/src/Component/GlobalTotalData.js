import React from 'react'
import {View,FlatList,Text,StyleSheet,TouchableOpacity} from 'react-native'
import GlobalResponse from '../API/GlobalResponse'
import DisplayData from './DisplayData'
import Colorpicker from '../Functions/ColorPicker'
const GlobalTotalData = ()=>{
    const result = GlobalResponse()
    var size = 0
    for(var key in result.tested)
    {

    }
    var  TotalData= {}
    try{
   
    TotalData={
        Confirmed:{
            data:result["Global"].TotalConfirmed
        },
        Active:{
            data:result["Global"].TotalConfirmed-result["Global"].TotalRecovered-result["Global"].TotalDeaths
        },
        Recovered:{
            data:result["Global"].TotalRecovered
        },
        Deaths:{
            data:result["Global"].TotalDeaths
        }
    }
        }
    catch{
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
                    DisplayDataFor="Global"
                    ApiLink ="https://api.covid19api.com/summary"
                    FetchData={false}
                    />
                    

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
export default GlobalTotalData