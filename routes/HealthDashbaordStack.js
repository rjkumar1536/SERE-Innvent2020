import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import healthDashboard from '../screens/HealthDashboard';

const screens = {
  About: {
    screen: healthDashboard,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Revenue" navigation={navigation} />
      }
    },
  },
}

const healthDashboardStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default healthDashboardStack;