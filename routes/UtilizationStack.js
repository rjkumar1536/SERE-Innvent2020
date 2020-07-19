import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Utilization from '../screens/Utlization';

const screens = {
  Utilization: {
    screen: Utilization,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Equipment Utilization' navigation={navigation} />
      }
    },
  },
}

const UtilizationStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default UtilizationStack;