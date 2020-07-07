import { createAppContainer} from 'react-navigation'
import {createStackNavigator,HeaderBackground} from 'react-navigation-stack'
import MainScreen from './assets/src/Screen/MainScreen'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'
import StateScreen from './assets/src/Screen/StateScreen'
import DataTableScreen from './assets/src/Screen/DataTableScreen'
import IndiaScreen from './assets/src/Screen/IndiaScreen'
import StateHomeScreen from './assets/src/Screen/StateHomeScreen'
import GlobalHomeScreen from './assets/src/Screen/GlobalHomeScreen'
import GlobalScreen from './assets/src/Screen/GlobalScreen'
import SingleCountry from './assets/src/Screen/SingleCountry'

const navigator = createStackNavigator({
  Screen:MainScreen,
  State:StateScreen,
  DataTable:DataTableScreen,
  IndiaScreen:IndiaScreen,
  StateHomeScreen:StateHomeScreen,
  GlobalHomeScreen:GlobalHomeScreen,
  GlobalScreen:GlobalScreen,
  SingleCountry:SingleCountry
  },
  {
  initialRouteName:'Screen',
  
  defaultNavigationOptions:{
    title:"",
    headerStyle:{
      backgroundColor:"rgb(94,90,180)",
      // opacity:1,
      height:0,
      // borderWidth:0,
    
    }
    
    
  },

}


)

export default createAppContainer(navigator)


