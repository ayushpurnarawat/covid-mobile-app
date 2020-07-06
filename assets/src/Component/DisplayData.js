import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import NumberChange from '../Functions/NumberChange'
import RingChart from './RingChart'
import { AreaChart } from 'react-native-svg-charts'
import AreaChartExample from './AreaChart'
const DisplayData = ({Data,title,color,stateName,DisplayDataFor,id})=>{
    var date = new Date()
    var month = date.getMonth()
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
                <AreaChartExample title={title} from={month} 
                backgroundGradientFrom={"rgb(180,74,42,.5)"}
                ChartWidth={150}
                ChartHeight={80}
                />
                
            </View>
            <View style={{marginLeft:30,marginTop:3}}>
                        
                        <RingChart Data={Data} title={title} DisplayDataFor={DisplayDataFor} id={id}/>
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
export default DisplayData