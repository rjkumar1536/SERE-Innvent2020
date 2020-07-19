import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import healthDashboard from '../screens/HealthDashboard';
import PurchasePlan from '../screens/PurchasePlan';

const screens = {
  Subscription: {
    screen: PurchasePlan,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Subscription Plans" navigation={navigation} />
      }
    },
  },
}

const PurchasePlanStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default PurchasePlanStack;