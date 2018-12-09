import React from 'react';
import HomeScreen from '../screens/HomeScreen';

import { BottomNavigation } from 'react-native-material-ui';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from 'react-native';
export default class MainTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: ''}
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
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
          label="Past"
          onPress={() => this.setState({ active: 'last' })}
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