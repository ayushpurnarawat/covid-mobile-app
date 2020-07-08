import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import NumberChange from '../Functions/NumberChange'
import RingChart from './RingChart'
import AreaChartExample from './AreaChart'
import * as d3 from 'd3'
import AreaChartSingleCountry from './AreaChartSingleCountry'
import {withNavigation} from 'react-navigation'
const DisplayData = ({Data,title,color,stateName,DisplayDataFor,id,StateCode,ApiLink,navigation,FetchData})=>{
    console.log(id,"SingleCountry",DisplayDataFor)
    var D3TIME = d3.timeFormat("%Y-%m-%d")
    var dates = new Date()
    var OneDayBefore = new Date(dates.getTime()-(1*24*60*60*1000))
    var CurrentDate = D3TIME(OneDayBefore)+"T00:00:00.000Z"
    var PastDate = new Date(dates.getTime()-(7*24*60*60*1000))
    var PastSavenDaysDate = D3TIME(PastDate)+"T00:00:00.000Z"
    console.log(PastSavenDaysDate,"[JAIN]",CurrentDate)

    var date = new Date()
    var month = date.getMonth()
    var AreaChart = null
    if(DisplayDataFor==='India')
    {
        AreaChart=<AreaChartExample title={title} from={month} 
                backgroundGradientFrom={"rgb(180,74,42,.5)"}
                ChartWidth={150}
                ChartHeight={80}
                DisplayDataFor={DisplayDataFor}
                id={id}
                StateCode={StateCode}
                ApiLink="https://api.covid19india.org/data.json"
                CurrentDate={CurrentDate}
                PastSavenDaysDate={PastSavenDaysDate}
                FetchData={FetchData}
                />
    }
    else if(DisplayDataFor==='Global')
    {
        AreaChart=<AreaChartExample title={title} from={month} 
                backgroundGradientFrom={"rgb(180,74,42,.5)"}
                ChartWidth={150}
                ChartHeight={80}
                DisplayDataFor={DisplayDataFor}
                id={id}
                StateCode={StateCode}
                ApiLink="https://api.covid19api.com/world"
                CurrentDate={CurrentDate}
                PastSavenDaysDate={PastSavenDaysDate}
                FetchData={FetchData}
                />
    }
    else if(DisplayDataFor==='SingleCountry')
    {
        AreaChart=<AreaChartSingleCountry title={title} from={month} 
                backgroundGradientFrom={"rgb(180,74,42,.5)"}
                ChartWidth={150}
                ChartHeight={80}
                DisplayDataFor={DisplayDataFor}
                id={id}
                from={7}
                StateCode={StateCode}
                ApiLink="https://api.covid19api.com/total/country/"
                CurrentDate={CurrentDate}
                PastSavenDaysDate={PastSavenDaysDate}
                FetchData={FetchData}
                />
    }
    // 
    return(
        <View style={Styles.ViewStyle} >
            <View style={Styles.ViewStyleTwo}>            
                <View >
                    <Text 
                        style={Styles.TextStyleTitle} 
                        style={{color:color,fontWeight:"bold",marginLeft:3,fontSize:20}}>
                            {title}
                    </Text>
                    <Text 
                        style={Styles.TextStyleData} 
                        style={{color:color,fontSize:30,marginLeft:3}}>
                            {(NumberChange(Data))}
                    </Text>
                
                </View>
                {/* <AreaChartExample title={title} from={month} 
                backgroundGradientFrom={"rgb(180,74,42,.5)"}
                ChartWidth={150}
                ChartHeight={80}
                DisplayDataFor={DisplayDataFor}
                id={id}
                StateCode={StateCode}
                ApiLink={ApiLink}
                /> */}
                {AreaChart}
            </View>
            <View style={{marginLeft:30,marginTop:3}}>
                        
                        <RingChart Data={Data} title={title} DisplayDataFor={DisplayDataFor} id={id} ApiLink={ApiLink}/>
                </View>
        </View>
    )
}
const Styles= StyleSheet.create({
    ViewStyle:{
        flexDirection:'row',
        
    },
    ViewStyleTwo:{
        
    
        height:100,
        width:250,
        backgroundColor:'white',
        margin:3,
        marginTop:13,
        borderBottomRightRadius:30,
        borderTopEndRadius:30,
        flexDirection:"row",
        marginLeft:0
        
    },
    TextStyleTitle:{
        fontSize:15,
        marginLeft:3,
        marginTop:5,
        color:'white',
        fontWeight:'bold'
    },
    TextStyleData:{
        fontSize:20,
        marginLeft:3,
        color:"white"
    }
}) 
export default withNavigation(DisplayData)