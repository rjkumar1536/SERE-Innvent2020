import { StyleSheet, Text, View, Button ,SafeAreaView ,ScrollView} from 'react-native'
import React , {useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Overlay } from 'react-native-elements';
import DatePicker from "react-native-datepicker";
// import ImagePicker from 'react-native-image-picker'

// import MenuDrawer from '../routes/MenuDrawer';


const AddEquipment = ({navigation}, name,spec)=>{
    console.log(name,spec);
    const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
    localStorage.setItem("subscription", true);
    const [date, setDate] = useState(new Date());
    const [image, setImage] = useState(null);
    // navigation.navigate('MenuDrawer')
    return (
        <SafeAreaView>
            <ScrollView>
            <View>
            {/* <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
               <Text>Confirm Crane XVW-1670 , Quantity : 5</Text>
            </Overlay> */}
            </View>
            <View style={styles.container}>
            <View style = {styles.Input} >
            <View style={styles.field}>
                <Text style = {styles.text}>Equipment</Text>
                <Input placeholder='Equipment Name'  value = 'Crane VXVW-1670'/>
            </View>
            <View style={styles.field}>
                <Text style = {styles.text}>Specifications</Text>
                <Input
                    placeholder='Equipment Specifications' value = 'Telematics Enabled, 24 HOS and Economic'
                />
            </View>
            <View style={styles.field}>
            <Text style = {styles.text}>Quantity</Text>
            <Input
                    placeholder='Quantity'
                />
            </View>
                <View style={styles.datePicker}>
                    <Text>From:</Text>
                    <DatePicker
                        style={{ width: 210 }}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate={date}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: "absolute",
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 36,
                        },
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {setDate({date})}}
                    />
                    </View>
                    <View style={styles.datePicker2}>
                    <Text>To:</Text>
                    <DatePicker
                        style={{ width: 210 }}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate={date}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: "absolute",
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 36,
                        },
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {setDate({date: date})}}
                    />
                    </View>

                <Input
                placeholder='Rates/Day/Week/Month'
                leftIcon={{ type: 'font-awesome', name: 'dollar', color : '#FEB12C' }}
                />
            </View>
            <View style = {styles.button}>
                <Button title="Add Photots"  color = "#FEB12C" type = "file"/>
            </View>
            <View style = {styles.button}>
                <Button title="Add Equipment"  type = "file" color = "#FEB12C" onPress = {()=>navigation.navigate('OwnerInventory')}/>
            </View>
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
    text : {
        fontSize : 15
    },
    button:{
        margin:10,
        width:200,
        
    },
    Input : {
        width : 250,
        margin : 5,
        fontSize : 15
    },
    datePicker: {
        margin: 26,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      datePicker2: {
        marginLeft: 14,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      field : {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize : 5
      }
     
})
export default AddEquipment;