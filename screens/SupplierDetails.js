import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import MenuDrawer from '../routes/MenuDrawer';


const SupplierDetails = ({navigation})=>{
    localStorage.setItem("subscription", true)
    // navigation.navigate('MenuDrawer')
    return (
        <View style={styles.container}>
            <Avatar
                source={{
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                }}
                showEditButton
                />
            <View style = {styles.Input} >
            <Input
                placeholder='Id'
                value = "Allen"
                leftIcon={{ type: 'font-awesome', name: 'id-badge' , color : "#FEB12C" }}
                />

                <Input
                placeholder='Address'
                value = "1910 Pacific Ave, Dallas, TX 75201."
                leftIcon={
                    <Icon
                    name='address-card-o'
                    size={24}
                    color='#FEB12C'
                    />
                }
                />

                <Input
                placeholder='Contact Details'
                value = "+9079946155"
                leftIcon={{ type: 'font-awesome', name: 'mobile-phone', color : "#FEB12C" }}
                />
            </View>
                <Button
                    title="Update Info" color = "#FEB12C" onPress = {()=>navigation.navigate('ForwardRoute')}
                />
        </View>
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
export default SupplierDetails;