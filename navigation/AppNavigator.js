import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator 
} from 'react-navigation';

// Unauthenticated Screens
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';

// Authenticated Screens
import HistoryScreen from '../screens/Authenticated/HistoryScreen';
import NotificationScreen from '../screens/Authenticated/Notifications/NotificationScreen';
import NewScreen from '../screens/Authenticated/NewScreen';
import SettingsScreen from '../screens/Authenticated/SettingsScreen';
//  Odds Are Types
import ViewChallengeRequest from '../screens/Authenticated/ChallengeRequest/ViewChallengeRequest';
import ViewChallengeResponse from '../screens/Authenticated/ChallengeResponse/ViewChallengeResponse';

import React from 'react';
import MainTabNavigator from './BottomTabNavigator';

const authorizedRouteConfig = {
  Notifications: NotificationScreen,
  History: HistoryScreen,
  Settings: SettingsScreen,
  New: NewScreen,
  ChallengeRequest: ViewChallengeRequest,
  ChallengeResponse: ViewChallengeResponse
}

const bottomTabNavigatorConfig = {
  initialRouteName: 'Notifications',
  tabBarComponent: props => 
    <MainTabNavigator {...props} />,
}

const AppStack = createBottomTabNavigator(
  authorizedRouteConfig, 
  bottomTabNavigatorConfig
);

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const RootStack =  createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const App = createAppContainer(RootStack);
export default App;