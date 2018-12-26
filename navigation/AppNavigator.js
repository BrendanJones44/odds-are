import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import SignInScreen from './SignInScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';

const AppStack = createStackNavigator({ Home: MainTabNavigator });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);