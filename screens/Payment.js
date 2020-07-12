import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Payment = () => {
    return (
        <View style={styles.pay}>
            <Text>Order Placed Successfully</Text>
            <Text>Cash will be collected once Equipment is transfered</Text>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    pay:{
        flex: 1,
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center'
    }
})
