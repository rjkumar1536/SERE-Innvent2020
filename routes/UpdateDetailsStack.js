import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import SupplierDetails from '../screens/SupplierDetails';

const screens = {
  About: {
    screen: SupplierDetails,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Update Profile" navigation={navigation} />
      }
    },
  },
}

const UpdateDetailsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default UpdateDetailsStack;