import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import IndiaResponse from '../API/IndiaResponse'
import TableHeader from '../Component/TableHeader'
import {withNavigation} from 'react-navigation'
import RowData from './RowData'
const TableData =({navigation})=>{
    const result = IndiaResponse()
    
    return(
        <ScrollView horizontal={true}>        
            <View style={Styles.ViewStyle}>
            <TableHeader name={"States"}/>
                {/* {TableDataArray} */}
            <FlatList
            data={result.statewise}
            keyExtractor={({item})=>item}
            renderItem={({item})=>{
                    if(item.state!=='Total')
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate("State",{id:item.state})}>
                    <RowData 
                        StateName={item.state} 
                        ConfirmedCases={item.confirmed}
                        ActiveCases={item.active}
                        RecoverCases={item.recovered}
                        DeathCases={item.deaths}    
                    />
                    </TouchableOpacity>
                    )
            }}
            />
        </View>
        </ScrollView>

    )
}
const Styles= StyleSheet.create({
    ViewStyle:{
    
    },

})
export default withNavigation(TableData)