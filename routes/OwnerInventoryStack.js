import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import OwnerInventory from '../screens/OwnerInventory';

const screens = {
  Inventory: {
    screen: OwnerInventory,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Inventory" navigation={navigation} />
      }
    },
  },
}

const OwnerInventoryStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default OwnerInventoryStack;