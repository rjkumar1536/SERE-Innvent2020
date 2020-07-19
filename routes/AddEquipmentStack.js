import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import AddEquipment from '../screens/AddEquipment';

const screens = {
  AddEquipment: {
    screen: AddEquipment,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Add Equipment" navigation={navigation} />
      }
    },
  },
}

const AddEquipmentStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default AddEquipmentStack;