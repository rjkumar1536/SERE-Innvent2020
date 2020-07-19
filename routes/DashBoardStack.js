import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import DashBoard from '../screens/S_dashboard';

const screens = {
  About: {
    screen: DashBoard,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Dashboard' navigation={navigation} />
      }
    },
  },
}

const DashBoardStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default DashBoardStack;