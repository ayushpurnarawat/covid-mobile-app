import React from 'react'
import {View,Text,FlatList} from 'react-native'
import IndiaResponse from '../API/IndiaResponse'
import DisplayData from './DisplayData'
import ColorPicker from '../Functions/ColorPicker'
import {STATE_NAMES} from '../Screen/Constant'
const StateTotalData = ({id})=>{
    var StateCode 
    for(var key in STATE_NAMES)
    {
        if(STATE_NAMES[key]===id)
            StateCode=key
    }
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
        <View style={{marginTop:100}}>
            <Text style={{color:ColorPicker("Deaths"),fontWeight:'bold',fontSize:25}}>{id}</Text>

            <FlatList 
            data={Object.keys(TotalData)}
            renderItem={({item})=>{
                        
                        return (
                            <DisplayData 
                                Data={TotalData[item].data} 
                                title={item} 
                                color={ColorPicker(item)}
                                DisplayDataFor="State"
                                id={id}
                                StateCode={StateCode}
                                ApiLink="https://api.covid19india.org/data.json"
                            />
                        )
                    
            }}
            
            />

        </View>
    )
}

export default StateTotalData