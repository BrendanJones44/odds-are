import React, { useContext, useEffect } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

import FriendsContext from '../storage/friends-context';
import NotificationsContext from '../storage/notifications-context';
import AuthenticationContext from '../storage/authentication-context';

const stubbedFriends = [
  {
    "id": 1,
    "full_name": "Tal Cohen"
  },
  {
    "id": 2,
    "full_name": "Jake Hartwell"
  },
  {
    "id": 3,
    "full_name": "Ethan Spence"
  },
  {
    "id": 4,
    "full_name": "Sean Fontaine"
  },
  {
    "id": 5,
    "full_name": "Alex Walsh"
  }
];

const stubbedNotifications = [
  {
    "id": 1,
    "actor": "Jake Hartwell",
    "action": "sent you an odds are",
    "notifiable_id": 372,
    "notifiable_type": "ChallengeRequest",
    "created_at": "2019-02-24T06:43:00.475Z"
  },
  {
    "id": 2,
    "actor": "Sean Fontaine",
    "action": "responded to your odds are",
    "notifiable_id": 373,
    "notifiable_type": "ChallengeResponse",
    "created_at": "2019-02-22T18:43:00.475Z"
  },
  {
    "id": 3,
    "actor": "Alex Walsh",
    "action": "completed an odds are",
    "notifiable_id": 324,
    "notifiable_type": "ChallengeFinalization",
    "created_at": "2018-12-08T18:43:00.475Z"
  }
];

const stubbedAuthentication = {
  "token": "STUBBED_TOKEN",
  "client_token": "STUBBED_CLIENT_TOKEN"
};

function AuthLoadingScreen(props) {
  const { setNotifications } = useContext(NotificationsContext);
  //const { setNotifications } = useContext(NotificationsContext);
  //const { setAuthentication } = useContext(AuthenticationContext);

  useEffect(() => {
    fetchAndValidateToken();
  }, []);

  fetchAndValidateToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
  
    if(userToken) {
      // call out to metadata
      //setFriends(stubbedFriends);
      setNotifications(stubbedNotifications);
      setAuthentication(stubbedAuthentication);
      props.navigation.navigate('App');
    } else {
      props.navigation.navigate('Auth');
    }
  };

  // Loading Screen
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingScreen;