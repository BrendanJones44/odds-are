import React, { useState, useContext } from 'react';

import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, Button } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

import FriendsContext from '../storage/friends-context';
import NotificationsContext from '../storage/notifications-context';
import AuthenticationContext from '../storage/authentication-context';

import UserContext from '../storage/user-context';

const authenticationHost = 'https://e6be52db.ngrok.io';
const authenticationEndpoint = authenticationHost + '/api/users/authenticate_and_metadata'


const SignInScreen = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthentication } = useContext(AuthenticationContext);
  const { setNotifications } = useContext(NotificationsContext);
  const { setFriends } = useContext(FriendsContext);
  const { setUserId } = useContext(UserContext);

  processResult = async (result) => {
    if (result.body.message === "authenticated") {
      await AsyncStorage.setItem('userCredentials', JSON.stringify(result.auth_token))
      setAuthentication(result.auth_token)
      setNotifications(result.body.data.notifications)
      setFriends(result.body.data.friends)
      setUserId(result.body.data.user_id)
    }
    return true;
  }
  onPressSignIn = async() => {
    fetch(authenticationEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userName,
        password: password
      }),

    })
      .then(response => response.json().then(body => ({
        auth_token: response.headers.get("auth_token"),
        body
      })))
    .then(result =>
      processResult(result)
    ).then(success =>
      success ? props.navigation.navigate('App') : console.log("uh oh")
    )
  }

    return (
      <View style={styles.container}>
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.welcomeText}>Welcome to Odds Are!</Text>
            <Card style={styles.contentCard}>
            <TextField
              label='Email'
              inputContainerStyle={styles.inputStyle}
              fontSize={20}
              autoCapitalize='none'
              onChangeText={(userName) => setUserName(userName)}
              value={userName}
            />
            <TextField
              label='Password'
              fontSize={20}
              secureTextEntry={true}
              inputContainerStyle={styles.inputStyle}
              onChangeText={(password) => setPassword(password)}
              value={password} />
            <Button 
              raised
              primary
              onPress={onPressSignIn}
              text="Sign In" />
            </Card>
          </View>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 24,
    alignSelf: 'center',
    padding: 40
  },
  contentContainer: {
    paddingTop: 30,
  },
  inputStyle: {
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'stretch'
  },
});

export default SignInScreen;