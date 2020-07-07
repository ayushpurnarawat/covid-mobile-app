import React from 'react'
import {View,Text} from 'react-native'
import {withNavigation} from 'react-navigation'

import TableData from '../Component/TableData'
const StateScreen = ({navigation,id})=>{
    var id = navigation.getParam("id")
    return(
        <View style={{backgroundColor:'rgb(111,108,170)'}}>
            <TableData/>
        </View>
    )
}

export default withNavigation(StateScreen)