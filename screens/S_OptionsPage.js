import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import PurchasePlan from './PurchasePlan';
import MenuDrawer from '../routes/MenuDrawer';


const S_OptionsPage = ({ navigation }) => {
    let plans =  localStorage.getItem("subscription");
    console.log(plans)
    return (
        <>
        {
            plans ? <MenuDrawer></MenuDrawer>:<PurchasePlan navigation={navigation}></PurchasePlan>
        }
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        
        width: 200,
        margin: 30,
        padding: 20
    }
})

// import { SideMenu, List, ListItem , View} from 'react-native-elements'
// import  React,{useState} from 'react';

//   const S_OptionsPage = () => {
//     let list = [
//         {
//             name : 'Dashboard'
//         },
//         {
//             name : 'Update Details'
//         },
//         {
//             name : 'Add Equipment'
//         },
//         {
//             name : 'Update Subscription Plan'
//         }
//     ];
//    const toggleSideMenu = ()=> {
//         toggle(!isOpen);
//       }
//     const [isOpen, toggle] = useState(false);
//     const MenuComponent = (
//         <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
//           <List containerStyle={{marginBottom: 20}}>
//           {
//             list.map((l, i) => (
//               <ListItem
//                 // roundAvatar
//                 onPress={() => console.log('Pressed')}
//                 // avatar={l.avatar_url}
//                 key={i}
//                 title={l.name}
//                 // subtitle={l.subtitle}
//               />
//             ))
//           }
//           </List>
//         </View>
//       )
//     return (
//         <SideMenu
//           isOpen={isOpen}
//           menu={MenuComponent}>
//           {/* <App toggleSideMenu={toggleSideMenu} /> */}
//         </SideMenu>
//       )
//   }

export default S_OptionsPage;
// 