import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {Card,ListItem, Button, Icon} from 'react-native-elements';

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]
const MachineOperator = ({navigation})=>{
    return (
        <View style = {styles.card} title = "SERE">
        <ScrollView>
        <Card
             style = {{width : 200}}
            title='Abhishek Kumar'
            image={require('../images/stock-photo-co-workers-talking-at-construction-site-with-bulldozer-behind-them-140317507.jpg')}>
            <Text style={{marginBottom: 10}}>
                   Road Roller, Forklifter, Bulldozer, Tractor, Truck ,
                   Exacavator , Cranes , Operator
                   Experinece 20+ Years. 
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card>
            <Card
             style = {{width : 400}}
            title='Emma'
            image={require('../images/woman-reflective-clothing-operating-heavy-260nw-774790195.jpg')}>
            <Text style={{marginBottom: 10}}>
                Road Roller, Forklifter, Bulldozer, Tractor, Truck Operator. Experinece 13+ Years. 
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card>
            <Card
             style = {{width : 400}}
            title='Charlotte'
            image={require('../images/stock-photo-mechanic-in-the-garage-fixing-big-truck-646798654.jpg')}>
            <Text style={{marginBottom: 10}}>
                Exacavator , Cranes , Bulldozer Operator. Experience : 10+ yeras. Available Now !!!
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card>
            
        </ScrollView>
        </View>
    )
}

export default MachineOperator;

const styles = StyleSheet.create({
    card : {
        flex : 1,
        flexDirection : "column",
        // width : 400,
        alignItems : "center",
        justifyContent : "center"
    }
})