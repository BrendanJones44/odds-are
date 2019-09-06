import React, {useContext} from 'react';
import Notification from './Notification';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import NotificationsContext from '../../../storage/notifications-context';
import UserContext from '../../../storage/user-context';

const Notifications = (props) => {
  const { userId } = useContext(UserContext);
  const { notifications } = useContext(NotificationsContext);

  var notificationList = notifications.map(function (notification) {
    return (
      <Notification
        action={notification.action}
        actor={notification.actor}
        key={notification.id}
        id={notification.id}
        time={notification.created_at}
        type={notification.notifiable_type} />
    )
  });
  return(
    <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between'
      }}>
      <View style={styles.contentContainer}>
        {notificationList}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  challengeText: {
    flex: 2,
  },
  challengeTextWrapper: {
    flex: 2,
  },
  dropDownWrapper: {
    flex: 1,
  },
  notification: {
    height: 120,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  contentContainer: {
    padding: 30,
    flex: 1,
  },
});

export default Notifications;
