import React from 'react'
import {View} from 'react-native'
import {withNavigation} from 'react-navigation'
import DistrictTableData from '../Component/DistrictTableData'
const StateScreen = ({navigation,id})=>{
    var id = navigation.getParam("id")
    return(
        <View style={{backgroundColor:'rgb(111,108,170)',opacity:.9}}>
            {/* <StateTotalData id={id}/> */}

            <DistrictTableData id={id}/>
        </View>
    )
}

export default withNavigation(StateScreen)