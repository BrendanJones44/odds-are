import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { Button, AsyncStorage } from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';
import {
  View
} from 'react-native';
export default class MainTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: '' }
  }
  signout = async () => {
    await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Log Out" onPress={this.signout} />
        <HomeScreen />
      <View>
      <BottomNavigation active={this.state.active} hidden={false} >
        <BottomNavigation.Action
          key="notifications"
          icon="notifications"
          label="(1)"
          onPress={() => this.setState({ active: 'notifications' })}
        />
        <BottomNavigation.Action
          key="add"
          icon="add"
          label="New"  
          onPress={() => this.setState({ active: 'add' })}
        />
        <BottomNavigation.Action
          key="list"
          icon="list"
          label="list"
          onPress={() => this.setState({ active: 'list' })}
        />
        <BottomNavigation.Action
          key="settings"
          icon="settings"
          label="Settings"
          onPress={() => this.setState({ active: 'settings' })}
        />
      </BottomNavigation>
      </View>
    </View>
    )}
}