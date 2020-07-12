import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const PurchasePlan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title='100$/Year'></Button>
            </View>
            <View style={styles.button}>
                <Button title='200$/Year'></Button>
            </View>
            <View style={styles.button}>
                <Button title='300$/Year'></Button>
            </View>
        </View>

    )
}

export default PurchasePlan

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        margin:15,
        width:200,
        
    }
})
