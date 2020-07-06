import { createAppContainer, ThemeColors} from 'react-navigation'
import {createStackNavigator, HeaderBackground} from 'react-navigation-stack'
import MainScreen from './assets/src/Screen/MainScreen'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'
import StateScreen from './assets/src/Screen/StateScreen'
import DataTableScreen from './assets/src/Screen/DataTableScreen'

const navigator = createStackNavigator({
  Screen:MainScreen,
  State:StateScreen,
  DataTable:DataTableScreen

  },
  {
  initialRouteName:'Screen',
  
  defaultNavigationOptions:{
    title:"",
    headerStyle:{
      backgroundColor:"rgb(94,90,180)",
      opacity:1,
      height:0,
      borderWidth:0,
      marginTop:20,
    }
    
    
  },

}


)

export default createAppContainer(navigator)