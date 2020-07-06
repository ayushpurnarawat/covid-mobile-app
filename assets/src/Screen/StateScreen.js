import React from 'react'
import {View,Text} from 'react-native'
import {withNavigation} from 'react-navigation'
import StateTotalData from '../Component/StateTotalData'
import DistrictTableData from '../Component/DistrictTableData'
const StateScreen = ({navigation,id})=>{
    var id = navigation.getParam("id")
    return(
        <View style={{backgroundColor:'rgb(27,27,24)',opacity:.9}}>
            <StateTotalData id={id}/>

            <DistrictTableData id={id}/>
        </View>
    )
}

export default withNavigation(StateScreen)