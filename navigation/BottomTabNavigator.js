import React from 'react';
import { BottomNavigation } from 'react-native-material-ui';

//TODO: Replace this with dynamic notifications
const notificationText = "(1)";

export default class MainTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: '' }
  }
  onHistoryPress = () => {
    this.props.navigation.navigate('History');
    this.setState({ active: 'History' });
  }
  onNotificationsPress = () => {
    this.props.navigation.navigate('Notifications');
    this.setState({ active: 'Notifications'});
  }
  onNewPress = () => {
    this.props.navigation.navigate('New');
    this.setState({ active: 'New'});
  }
  onSettingsPress = () => {
    this.props.navigation.navigate('Settings');
    this.setState({ active: 'Settings' });
  }
  render() {
    return (
        <BottomNavigation active={this.state.active} hidden={false} >
          <BottomNavigation.Action
            key="Notifications"
            icon="notifications"
            label={notificationText}
            onPress={this.onNotificationsPress}
          />
          <BottomNavigation.Action
            key="New"
            icon="add"
            label="New"  
            onPress={this.onNewPress}
          />
          <BottomNavigation.Action
            key="History"
            icon="history"
            label="History"
            onPress={this.onHistoryPress}
          />
          <BottomNavigation.Action
            key="Settings"
            icon="settings"
            label="Settings"
            onPress={this.onSettingsPress}
          />
        </BottomNavigation>
    )}
}