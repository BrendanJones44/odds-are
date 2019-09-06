import React, { useState, useContext } from 'react';
import { BottomNavigation } from 'react-native-material-ui';
import NotificationsContext from '../storage/notifications-context';

export default MainTabNavigator = (props) => {
  const [state, setState] = useState({ active: '' });
  const { notificationsCount } = useContext(NotificationsContext);

  const notificationText = "(" + notificationsCount + ")";

  onSearchPress = () => {
    props.navigation.navigate('Search');
    setState({ active: 'Search' });
  }

  onNotificationsPress = () => {
    props.navigation.navigate('Notifications');
    setState({ active: 'Notifications'});
  }

  onNewPress = () => {
    props.navigation.navigate('New');
    setState({ active: 'New'});
  }

  onSettingsPress = () => {
    props.navigation.navigate('Settings');
    setState({ active: 'Settings' });
  }

  return (
      <BottomNavigation active={state.active} hidden={false} >
        <BottomNavigation.Action
          key="Notifications"
          icon="notifications"
          label={notificationText}
          onPress={onNotificationsPress}
        />
        <BottomNavigation.Action
          key="New"
          icon="add"
          label="New"  
          onPress={onNewPress}
        />
        <BottomNavigation.Action
          key="Search"
          icon="group"
          label="Search"
          onPress={onSearchPress}
        />
        <BottomNavigation.Action
          key="Settings"
          icon="settings"
          label="Settings"
          onPress={onSettingsPress}
        />
      </BottomNavigation>
  )
};