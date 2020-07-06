import React, { useState, useEffect } from 'react'
import {View,Text,Dimensions, DatePickerIOSBase} from 'react-native'
import {LineChart } from 'react-native-chart-kit'
import IndiaResponse from '../API/IndiaResponse'
import useSwr from 'swr'
import * as d3 from 'd3'
import { rgb } from 'd3'
import ColorPicker from '../Functions/ColorPicker'
var TimeConv = d3.timeParse('%d %B %Y')
async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }
const AreaChartExample=({title,from,ChartHeight,ChartWidth})=>{
    console.log(title,"???????????")
    // const time =TimeConv(result.cases_time_series[0].date+"2020")
    const {data:abc} = useSwr("https://api.covid19india.org/data.json",fetcher)
    if(abc){
    var labels =[]
    var data = []
    var count = 0
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    for(var key in abc.cases_time_series)
    {
        var time =TimeConv(abc.cases_time_series[key].date+"2020")
        var mon=(time.getMonth())
        var date= (time.getDate())
        if(mon===from){
    
        
        if(title==='Confirmed'){
            console.log("enter----",ChartWidth)

        data[count]=abc.cases_time_series[key].dailyconfirmed
        labels[count] = date
        var chartColor = title
         chartColor= ColorPicker(title,chartColor)
        }
        if(title==='Recovered')
        {
            data[count]=abc.cases_time_series[key].dailyrecovered
            labels[count] = date
            var chartColor = title
          chartColor= ColorPicker(title,chartColor)
        }
        if(title==='Active')
        {
            data[count]=(abc.cases_time_series[key].dailyconfirmed)-(abc.cases_time_series[key].dailyrecovered)-(abc.cases_time_series[key].dailydeceased)
            labels[count] = date
            var chartColor = title
          chartColor= ColorPicker(title,chartColor)
        }
        if(title==='Deaths')
        {
            data[count]=abc.cases_time_series[key].dailydeceased
            labels[count] = date
            var chartColor = title
          chartColor= ColorPicker(title,chartColor)
        }
        count++
        }
        

    }
}
    



const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    withOuterLines:false,
    withInnerLines:false,
    color: (opacity = 1) => `rgba(0, 255, 146, 0)`,
    strokeWidth: 10, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true,
    withDots:false,
    propsForDots: {
        r: "0",
        strokeWidth: "2",
        stroke: "red"
      } // optional
  };
    if(!abc)
    return <View><Text>Hellogjgj</Text></View>
    return(
        <View>
            <View style={{marginTop:0,marginLeft:-10}}>


                    <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                              data: data,
                              color: (opacity = 1) => `${chartColor} 1)`, // optional
                              strokeWidth: 2 // optional
                            }
                          ]
                    }}
                    width={ChartWidth}
                    height={ChartHeight}
                    chartConfig={chartConfig}
                    />
        </View>
        </View>
    ) 
}
export default AreaChartExample