import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const S_OptionsPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <View style={styles.button}>
            <Button title="DashBoard"  onPress={() => navigation.push("S_Dashboards")}/>
        </View>
        <View style={styles.button}>
            <Button title="Update Details" style={styles.button} ></Button>
        </View>
        <View style={styles.button}> 
            <Button title="Add Equipment" style={styles.button}></Button>
        </View>
        <View style={styles.button}> 
            <Button title="Purchase Plans" style={styles.button}  onPress={()=>navigation.push('PurchasePlans')}></Button>
        </View>
        </View>
       
    )
}

export default S_OptionsPage

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
