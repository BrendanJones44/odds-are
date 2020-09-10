import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator 
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import { Button, View } from 'react-native';


import { createDrawerNavigator } from 'react-navigation-drawer';

// Unauthenticated Screens
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';

// Authenticated Screens
import SearchScreen from '../screens/Authenticated/SearchScreen';
import NotificationScreen from '../screens/Authenticated/Notifications/NotificationScreen';
import NewScreen from '../screens/Authenticated/NewScreen';
import SettingsScreen from '../screens/Authenticated/SettingsScreen';
//  Odds Are Types
import ViewChallengeRequest from '../screens/Authenticated/ChallengeRequest/ViewChallengeRequest';
import ViewChallengeResponse from '../screens/Authenticated/ChallengeResponse/ViewChallengeResponse';
import ViewChallengeFinalization from '../screens/Authenticated/ChallengeFinalization/ViewChallengeFinalization';

import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';

const authorizedRouteConfig = {
  New: NewScreen,
}

const Home = () => {
  <h1>Home Screen</h1>
}

const DrawerNavigatorConfig = {
  Home: {
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" style={{ color: tintColor }} />
      ),
      drawerLabel: "Home"
    },
    screen: Home
  },
}
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const DrawerNavigator = createDrawerNavigator(authorizedRouteConfig, DrawerNavigatorConfig);

const RootStack =  createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const App = createAppContainer(RootStack);
//export default App;

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-log-out" style={{ color: tintColor }} />
    ),
  };

  render() {
    console.log("rendered")
    return (
      <View style={{ backgroundColor: "blue", width: "100%" }}>

      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-log-out" style={{ color: tintColor }} />
    ),
  };

  render() {
    console.log("rendered")
    return (
      <View style={{backgroundColor: "red"}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;