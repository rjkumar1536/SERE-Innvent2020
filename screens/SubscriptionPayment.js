import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input} from 'react-native-elements';
// import MenuDrawer from '../routes/MenuDrawer';


const SubscriptionPayment = ({navigation})=>{
    localStorage.setItem("subscription", true)
    // navigation.navigate('MenuDrawer')
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
            <Text> Payment Processing Gateway...</Text>
            <View style = {styles.Input} >
            <Input
                placeholder='Card Details'
                value = "5645-7845-9087"
                leftIcon={{ type: 'font-awesome', name: 'cc-mastercard',color : '#FEB12C' }}
                />

                <Input
                placeholder='Referral Id'
                value = "675645"
                leftIcon={
                    <Icon
                    name='id-badge'
                    size={24}
                    color='#FEB12C'
                    />
                }
                />

                <Input
                placeholder='Amount'
                disabled = "true"
                value = "100$"
                leftIcon={{ type: 'font-awesome', name: 'dollar', color : "#FEB12C" }}
                />
            </View>
                <Button
                    title="Proceed for Payment" color = "#FEB12C" onPress = {()=>navigation.navigate('SupplierDetails')}
                />
        </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

    },
    button:{
        margin:15,
        width:200,
        
    },
    Input : {
        width : 300,
        margin : 5
    }
})
export default SubscriptionPayment;