import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {PricingCard} from 'react-native-elements';
import SubscriptionPayment from './SubscriptionPayment';
import { ScrollView } from 'react-native-gesture-handler';
let plan = localStorage.getItem("subscription");
    let title;
    if(plan){
        title = 'Purchased';
    }
    else{
        title = 'Buy Now'
    }
const PurchasePlan = ({ navigation }) => {
    return (
        <View style={styles.container} title = "SERE">
           <ScrollView>
           <PricingCard
                color="#FEB12C"
                title="Basic"
                price="$99/month/user, 289$/month/3 user"
                pricingStyle = {styles.price}
                info={[ 'Dashboard with Utilization', 'Inventotry Management','AI Chatbot Support 24X7','All Core Features']}
                onButtonPress = {()=>navigation.push('SubscriptionPayment')}
                button={{ title: title }}
                />
            <PricingCard
                color="#068932"
                title="Intermediate"
                price="$110/month/user, 315$/month/3 user"
                pricingStyle = {styles.price}
                info={['Equipment Tracker', 'Revenue Calculator', 'All Basic Features']}
                button={{ title: 'Buy Now' }}
                />
             <PricingCard
                color="#1f3d83"
                title="Premium"
                price="$249/month/user, 699$/month/3 user"
                pricingStyle = {styles.price}
                info={['AR Demo/Training', 'Health Tracking', 'Equipment Tracker and Analysis','All Intermediate Features']}
                button={{ title: 'Buy Now' }}
                />
           </ScrollView>
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
        
    },
    price : {
        fontSize: 20,
        width : 200,
        margin : 'auto'
    }
})
