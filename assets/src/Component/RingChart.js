import React from 'react'
import {View,Text,Dimensions} from 'react-native'
import { ProgressChart} from 'react-native-chart-kit'
import useSwr from 'swr'
import ColorPicker from '../Functions/ColorPicker';
async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }
const RingChart = ({Data,title,DisplayDataFor,id})=>{
    console.log("id====",id)
    var per = []
    var showPersentage =null
    const {data:abc} = useSwr("https://api.covid19india.org/data.json",fetcher)
    if(abc)
    {
        if(DisplayDataFor==='India')
        {
        if(title==="Active"){
        per[0]=(abc.statewise[0].active)/(abc.statewise[0].confirmed)
        showPersentage = (<Text 
                style={{color:"gray",fontWeight:'bold',marginTop:48,marginLeft:28}}>
                    {parseFloat(per[0]*100).toFixed(0)+"%"}
                    </Text>)
        
        }
        else if(title==="Recovered")
        {
            per[0]=(abc.statewise[0].recovered)/(abc.statewise[0].confirmed)
            showPersentage = (<Text 
                style={{color:"gray",fontWeight:'bold',marginTop:48,marginLeft:28}}>
                    {parseFloat(per[0]*100).toFixed(0)+"%"}
                    </Text>)
        }
        else if(title==='Deaths')
        {
            per[0]=(abc.statewise[0].deaths)/(abc.statewise[0].confirmed)
            showPersentage = (<Text 
                style={{color:"gray",fontWeight:'bold',marginTop:48,marginLeft:28}}>
                    {parseFloat(per[0]*100).toFixed(0)+"%"}
                    </Text>)
        }
        }
        else if(DisplayDataFor==='State')
        {
            for(var key in abc.statewise)
            {
                if(abc.statewise[key].state===id)
                {
                    if(title==="Active")
                    {
                        
                        per[0]=(abc.statewise[key].active)/(abc.statewise[key].confirmed)
                        showPersentage = (<Text 
                                style={{color:"gray",fontWeight:'bold',marginTop:48,marginLeft:28}}>
                                    {parseFloat(per[0]*100).toFixed(0)+"%"}
                                    </Text>)
                    
                    }
                    else if(title==="Recovered")
                        {
                            per[0]=(abc.statewise[key].recovered)/(abc.statewise[key].confirmed)
                            showPersentage = (<Text 
                                style={{color:"gray",fontWeight:'bold',marginTop:48,marginLeft:28}}>
                                    {parseFloat(per[0]*100).toFixed(0)+"%"}
                                    </Text>)
                        }
                    else if(title==='Deaths')
                    {
                        per[0]=(abc.statewise[key].deaths)/(abc.statewise[key].confirmed)
                        showPersentage = (<Text 
                            style={{color:"gray",fontWeight:'bold',marginTop:48,marginLeft:28}}>
                                {parseFloat(per[0]*100).toFixed(0)+"%"}
                                </Text>)
                    }
                }
            }
        }
    }
    const dataset = {
        // labels: ["Run"], // optional
        data: per
      };
      const screenWidth = Dimensions.get("window").width;
      const chartConfig = {
        backgroundGradientFrom: "red",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "0",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => ColorPicker(title),
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    return(
        <View>
            {showPersentage}
            <ProgressChart
            data={dataset}
            width={100}
            height={120}
            strokeWidth={6}
            radius={35}
            chartConfig={chartConfig}
            hideLegend={true}
            style={{position:'absolute'}}
            />
        </View>
    )
}

export default RingChart