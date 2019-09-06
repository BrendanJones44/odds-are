
const SET_AUTHENTICATION = 'SET_AUTHENTICATION';
const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_USER_ID = 'SET_USER_ID';

export const actions = { SET_AUTHENTICATION, SET_NOTIFICATIONS, SET_FRIENDS, SET_USER_ID };

const setUserId = (state, userId) => {
  console.log("inside setuserId action", userId)
  return {
    ...state,
    userId: userId
  }
}

const setFriends = (state, friends) => {
  return {
    ...state,
    friends: friends
  };
};

const setNotifications = (state, notifications) => {
  return {
    ...state,
    notifications: notifications
  }
}

const setAuthenticaton = (state, authentication) => {
  return {
    ...state,
    authentication: authentication
  }
}

export const appReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_FRIENDS:
      return setFriends(state, payload);
    case SET_NOTIFICATIONS:
      return setNotifications(state, payload);
    case SET_AUTHENTICATION:
      return setAuthenticaton(state, payload);
    case SET_USER_ID:
      return setUserId(state, payload);
    default:
      return state;
  }
};