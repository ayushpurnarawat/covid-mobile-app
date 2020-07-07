import React from "react";
import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import TableHeader from '../Component/TableHeader'
import RowData from '../Component/RowData'
import {withNavigation} from 'react-navigation'
import useSwr from 'swr'
import { ScrollView } from "react-native-gesture-handler";
async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }
const GlobalTableData = ({navigation})=>{
    // const result = StateResponse()
    const {data:result} = useSwr("https://api.covid19api.com/summary",fetcher)
    var size =[]
    var count = 0
    if(result)
    {
        for(var key in result["Countries"])
        {
            size.push({
                key:key,
                data:key
            })
            count++
        }
    }
    
    if(!result)
    return (<View><Text>Loading</Text></View>)
    return(
        <ScrollView horizontal={true}>
        <View style={{marginTop:50}}>
            <TableHeader name={"Global"}/>
            <FlatList
            data={Object.keys(result["Countries"])}
            renderItem={({item})=>{
                return (
                 <TouchableOpacity onPress={()=>navigation.navigate("SingleCountry",{id:result["Countries"][item].Country})}> 
                <RowData 
                    StateName={result["Countries"][item].Country} 
                    ConfirmedCases={result["Countries"][item].TotalConfirmed}
                    ActiveCases={result["Countries"][item].TotalConfirmed-result["Countries"][item].TotalRecovered-result["Countries"][item].TotalDeaths}
                    RecoverCases={result["Countries"][item].TotalRecovered}
                    DeathCases={result["Countries"][item].TotalDeaths}    
                />
                </TouchableOpacity>
                )
                
            }}
            />
        </View>
        </ScrollView>
    )
}

export default withNavigation(GlobalTableData)