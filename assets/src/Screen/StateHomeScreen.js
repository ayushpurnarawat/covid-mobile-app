import React, { useEffect, Suspense } from 'react'
import {View,Text,ScrollView,StyleSheet,Dimensions, Button} from 'react-native'
import RingChart from '../Component/RingChart'
import {withNavigation}  from 'react-navigation'
import ButtonJs from '../Component/Button'
import StateTotalData from '../Component/StateTotalData'

const height = Dimensions.get("screen").height
const StateHomeScreen = ({navigation})=>{
    // const result = IndiaResponse()
    // console.log(result.cases_time_series[0].dailyconfirmed)
    var id = navigation.getParam("id")
    const height = Dimensions.get("window").height
    const width = Dimensions.get("window").width
    var date = new Date()
    var month = date.getMonth()
    return(
        
        <ScrollView showsVerticalScrollIndicator={false}>
      <View >      
        
        <View style={Styles.SecondViewStyle}>
        <Suspense fallback={<Text>Loading</Text>}>
            <StateTotalData id={id}/>
        </Suspense>
            {/* <TableData/>     */}
         {/* <ButtonJs click={()=>navigation.navigate('DataTable',{ApiLink:"https://api.covid19india.org/state_district_wise.json",id:id,FetchData:true})} title={"Statistics"}/> */}
         <ButtonJs click={()=>navigation.navigate('State',{id:id})} title={"DistrictWise"}/>
            
        </View> 
            
            
            <RingChart/>
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
        // height:height-(height/3)+25,
        marginTop:-25,
        borderTopEndRadius:45,
        borderTopLeftRadius:45
    }
    
})
export default withNavigation(StateHomeScreen)