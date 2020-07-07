import React, { Suspense } from 'react'
import {View,Text,ScrollView,StyleSheet,Dimensions, Button} from 'react-native'

import SearchBar from '../Component/SearchBar'
import RingChart from '../Component/RingChart'

import {withNavigation}  from 'react-navigation'
import ButtonJs from '../Component/Button'
import GlobalResponse from '../API/GlobalResponse'
import GlobalTotalData from '../Component/GlobalTotalData'

const TotalData = React.lazy(()=>import("../Component/TotalData"))
const AreaChartExample =  React.lazy(()=>import("../Component/AreaChart"))
const height = Dimensions.get("screen").height
const GlobalHomeScreen = ({navigation})=>{
    var FetchData = navigation.getParam('FetchData')
    console.log(FetchData,"[GlobalHomeScree]")
    const result = GlobalResponse()
    for(var key in result)
    {
        console.log(result["Global"])
    }
    return(
        
        <ScrollView showsVerticalScrollIndicator={false}>
      <View >      
        <View style={Styles.FirstViewStyle}>
            

        <SearchBar/>
        
        </View>   
        <View style={Styles.SecondViewStyle}>
        
         <GlobalTotalData DisplayDataFor={"Global"} FetchData={FetchData}/>
           
        </View> 
            
        <ButtonJs click={()=>navigation.navigate('DataTable',{DisplayDataFor:"Global",ApiLink:"https://api.covid19api.com/world"})} title={"Statistics"}/>
        <ButtonJs click={()=>navigation.navigate('GlobalScreen')} title={"CountryWise"}/>

            {/* <RingChart  /> */}
        </View>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    FirstViewStyle:{
        backgroundColor:"rgb(111,108,170)",         //rgb(94,90,180)
        height:height/3,
        borderBottomStartRadius:15,
        borderBottomEndRadius:15,
        
    },
    SecondViewStyle:{
        backgroundColor:'aliceblue',
        height:height-(height/3)-20,
        marginTop:-25,
        borderTopEndRadius:45,
        borderTopLeftRadius:45
    }
    
})
export default withNavigation(GlobalHomeScreen)