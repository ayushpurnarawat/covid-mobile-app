import React from 'react'
import {View,Text,Dimensions,StyleSheet, TabBarIOS} from 'react-native'
import {withNavigation} from 'react-navigation'
import StateTotalData from '../Component/StateTotalData'
import DistrictTableData from '../Component/DistrictTableData'
import AreaChartExample from '../Component/AreaChart'
import ColorPicker from '../Functions/ColorPicker'
import TableData from '../Component/TableData'
const height = Dimensions.get("screen").height

const DataTableScreen = ({navigation,id})=>{
    
    return(
        <View style={Styles.ViewStyle}>
            <View style={Styles.ViewStyleSecond}>
            <AreaChartExample title={"Confirmed"} from={5}                 
            backgroundGradientFrom={"rgb(180,74,42,.5)"}
            ChartHeight={100}
            ChartWidth={400}
            />
            </View>
            <View style={Styles.ViewStyleThird}>
            <AreaChartExample title={"Recovered"} from={5}                 
            backgroundGradientFrom={"rgb(180,74,42,.5)"}
            ChartHeight={100}
            ChartWidth={400}
            />
            </View>
            <View>
                <TableData/>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    ViewStyle:{
        backgroundColor:'rgb(111,108,170)', //rgb(111,108,170)
        opacity:1,
        height:height,
        
    },
    ViewStyleSecond:{
        marginTop:50
    },
    ViewStyleThird:{
        marginTop:-60
    }
})
export default withNavigation(DataTableScreen)