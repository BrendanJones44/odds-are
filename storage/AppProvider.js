import AuthenticationContext from './authentication-context';
import NotificationsContext from './notifications-context';
import FriendsContext from './friends-context';
import UserContext from './user-context';

import React, { useReducer } from 'react';

import { appReducer, actions } from './app-reducer';

const initialAuthentication = {
  token: '',
  client: '',
  uid: '',
  expiry: ''
};

const initialNotifications = [];

const initialFriends = [];

const initialState = {
  authentication: initialAuthentication,
  notifications: initialNotifications,
  friends: initialFriends,
}

const { SET_FRIENDS, SET_AUTHENTICATION, SET_NOTIFICATIONS, SET_USER_ID } = actions;

const AppProvider = props => {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  const setFriends = (metadata) => {
    dispatch({ type: SET_FRIENDS, payload: metadata });
  }
  
  const setAuthentication = (authentication) => {
    dispatch({ type: SET_AUTHENTICATION, payload: authentication });
  }

  const setNotifications = (notifications) => {
    dispatch({ type: SET_NOTIFICATIONS, payload: notifications });
  }

  const setUserId = (userId) => {
    dispatch({ type: SET_USER_ID, payload: userId });
  }

  return (
      <AuthenticationContext.Provider value={{
        authentication: appState.authentication,
        setAuthentication: setAuthentication
      }}>
        <NotificationsContext.Provider value={{
          notifications: appState.notifications,
          notificationsCount: appState.notifications.length,
          setNotifications: setNotifications
        }}>
          <FriendsContext.Provider value={{
            friends: appState.friends,
            setFriends: setFriends
          }}>
            <UserContext.Provider value={{
              userId: appState.userId,
              setUserId: setUserId
            }}>
              { props.children }
            </UserContext.Provider>
          </FriendsContext.Provider>
        </NotificationsContext.Provider>
      </AuthenticationContext.Provider>
  );
}

export default AppProvider;
