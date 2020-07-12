import React,{useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button,  Image } from 'react-native';
import Home from './screens/Home';
import HirerHome from './screens/HirerHome';
import FilteredProducts from './screens/FilteredProducts';
import EquipmentDetails from './screens/EquipmentDetails';
import Cart from './screens/Cart';
import { Icon } from 'react-native-elements';
import Payment from './screens/Payment';
import S_dashboard from './screens/S_dashboard';
import S_OptionsPage from './screens/S_OptionsPage';
import PurchasePlan from './screens/PurchasePlan';

const Stack = createStackNavigator();
function Homes({navigation}){
  return(
    <Home navigation={navigation}></Home>

  )
}
function Search({navigation}){
  return(
   <HirerHome navigation={navigation}></HirerHome>
  )
}
function FilteredProduct({navigation}){
  return(
   <FilteredProducts navigation={navigation}></FilteredProducts>
  )
}
function EquipmentDetail({navigation}){
  return(
   <EquipmentDetails navigation={navigation}></EquipmentDetails>
  )
}
function cartPage({navigation}){
  return(
   <Cart navigation={navigation}></Cart>
  )
}
function Payments({navigation}){
  return(
   <Payment ></Payment>
  )
}

function S_Dashboards({navigation}){
  return(
   <S_dashboard navigation={navigation}></S_dashboard>
  )
}

function S_OptionsPages({navigation}){
  return(
   <S_OptionsPage navigation={navigation}></S_OptionsPage>
  )
}

function PurchasePlans({navigation}){
  return(
  <PurchasePlan></PurchasePlan>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homes">
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{ title: "SERE", headerTitleAlign: "center" ,headerStyle: {
            backgroundColor: '#3F51B5',
          }}} 
        ></Stack.Screen>

        <Stack.Screen
          name="HirerHome"
          component={Search}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5',
          },}}
        ></Stack.Screen>

        <Stack.Screen
          name="FilteredProducts"
          component={FilteredProduct}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5',
          }}}
        ></Stack.Screen>

        <Stack.Screen
          name="EquipmentDetail"
          component={EquipmentDetails}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5',
          }}}
        ></Stack.Screen>

        <Stack.Screen
          name="cartPage"
          component={Cart}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5'
          }
           
          }}
        ></Stack.Screen>

      <Stack.Screen
          name="Payment"
          component={Payment}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5'
          }
           
          }}
        ></Stack.Screen>

      <Stack.Screen
          name="S_Dashboards"
          component={S_dashboard}
          options={{title:'DashBoard',headerStyle: {
            backgroundColor: '#3F51B5'  
          } , headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign: 'center' 
          }}
        ></Stack.Screen>

      <Stack.Screen
          name="S_OptionsPages"
          component={S_OptionsPage}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5'
          }  
          }}
        ></Stack.Screen>

        
      <Stack.Screen
          name="PurchasePlans"
          component={PurchasePlan}
          options={{title:'Plans',headerStyle: {
            backgroundColor: '#3F51B5'
          }   , headerTitleStyle: {
            fontWeight: 'bold',
            
          },headerTitleAlign: 'center' 
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

}



