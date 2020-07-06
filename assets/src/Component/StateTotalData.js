import React from 'react'
import {View,StyleSheet,Text,FlatList} from 'react-native'
import IndiaResponse from '../API/IndiaResponse'
import DisplayData from './DisplayData'
import ColorPicker from '../Functions/ColorPicker'
const StateTotalData = ({id})=>{
    const result = IndiaResponse()
    var TotalData = {}
    for(var key in result.statewise)
    {
        if(result.statewise[key].state===id)
        TotalData={
            Confirmed:{
                data:result.statewise[key].confirmed
            },
            Active:{
                data:result.statewise[key].active
            },
            Recovered:{
                data:result.statewise[key].recovered
            },
            Deaths:{
                data:result.statewise[key].deaths
            }
        }
    }
    return(
        <View>
            <Text>{id}</Text>
            <FlatList 
            data={Object.keys(TotalData)}
            renderItem={({item})=>{
                    
                        return (
                            <DisplayData 
                                Data={TotalData[item].data} 
                                title={item} 
                                color={ColorPicker(item)}
                                DisplayDataFor={"State"}
                                id={id}
                            />
                        )
                    
            }}
            horizontal={true}
            />

        </View>
    )
}

export default StateTotalData