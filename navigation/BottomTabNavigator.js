import React from 'react';
import { BottomNavigation } from 'react-native-material-ui';
import {
 
  AsyncStorage,

} from 'react-native';
//TODO: Replace this with dynamic notifications

const notificationText = "(1)";

export default class MainTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.log("brendan");
    console.log(this.state);
    
    this.state = { active: '' }
  }

  componentDidMount = async () => {
    const userCreds = await AsyncStorage.getItem('userCredentials');
    const headers = Object.assign({ 'Content-Type': 'application/json' }, JSON.parse(userCreds));
    return fetch("http://192.168.1.16:3000/api/v1/users/metadata", {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: headers
    }).then((responseJson) => {
      console.log(responseJson);
      //this.setState({notifications: JSON.parse(responseJson._bodyInit)});
    }).catch(error => {console.log(error)})
  }

  onSearchPress = () => {
    this.props.navigation.navigate('Search');
    this.setState({ active: 'Search' });
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
            key="Search"
            icon="group"
            label="Search"
            onPress={this.onSearchPress}
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