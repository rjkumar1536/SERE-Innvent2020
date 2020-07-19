import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import PurchasePlan from './PurchasePlan';
import MenuDrawer from '../routes/MenuDrawer';


const ForwardRoute = ({ navigation }) => {
    return (
        <>
            <MenuDrawer></MenuDrawer>
        </>
    )
}

export default ForwardRoute