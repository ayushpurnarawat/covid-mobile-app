import React, { Suspense } from 'react'
import {View,Text,ScrollView,StyleSheet,Dimensions, Button} from 'react-native'

import SearchBar from '../Component/SearchBar'
import RingChart from '../Component/RingChart'

import {withNavigation}  from 'react-navigation'
import ButtonJs from '../Component/Button'

const TotalData = React.lazy(()=>import("../Component/TotalData"))
const AreaChartExample =  React.lazy(()=>import("../Component/AreaChart"))
const height = Dimensions.get("screen").height
const MainScreen = ({navigation})=>{
    // const result = IndiaResponse()
    // console.log(result.cases_time_series[0].dailyconfirmed)
    const height = Dimensions.get("window").height
    const width = Dimensions.get("window").width
    var date = new Date()
    var month = date.getMonth()
    return(
        
        <ScrollView showsVerticalScrollIndicator={false}>
      <View >      
        <View style={Styles.FirstViewStyle}>
            <View>
                <Text 
                    style={{color:"white",fontWeight:'bold',fontSize:30,alignSelf:'center',marginTop:45}}>
                        Covid-19 Tracker
                </Text>
        </View>

        <SearchBar/>
        {/* <Suspense fallback={<Text>HE;;p</Text>}>
                <AreaChartExample 
                    title="confirmed" 
                    from={5} 
                    backgroundGradientFrom={"rgb(180,74,42,.5)"}/>
                 
            </Suspense>
         */}
        </View>   
        <View style={Styles.SecondViewStyle}>
        <Suspense fallback={<Text>Loading</Text>}>
            <TotalData/>
        </Suspense>
            {/* <TableData/>     */}
         <ButtonJs click={()=>navigation.navigate('DataTable',{DisplayDataFor:"India",ApiLink:"https://api.covid19india.org/data.json"})} title={"Statistics"}/>
         <ButtonJs click={()=>navigation.navigate('IndiaScreen')} title={"StateWise"}/>
         <ButtonJs click={()=>navigation.navigate("GlobalHomeScreen",{FetchData:false})} title={"Global"}/>
            {/* <Button 
            title="StateWise"
            onPress={()=>navigation.navigate('DataTable')}/> */}
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
        height:height-(height/3)+25,
        marginTop:-25,
        borderTopEndRadius:45,
        borderTopLeftRadius:45
    }
    
})
export default withNavigation(MainScreen)