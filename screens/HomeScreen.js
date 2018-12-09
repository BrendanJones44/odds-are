import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from 'react-native';

import Notifications from '../components/Notifications';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', password: '', token: '', authorized: false }
  }

  static navigationOptions = {
    header: null,
  };

  onPressSignIn = () => {
    return fetch('https://what-are-the-odds-are.herokuapp.com/users/sign_in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: this.state.userName,
          password: this.state.password
        }
      }),
    }).then((response) => response.headers)
      .then((responseJson) => {
        this.setState({
          token: responseJson["map"]["authorization"],
          authorized: true
        }, function () {

        });
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    const notifications = this.state.authorized ? <Notifications token={this.state.token} /> : null;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <TextInput
              style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(userName) => this.setState({ userName })}
              value={this.state.userName}
            />
            <TextInput 
              secureTextEntry={true} 
              style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1 }} 
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password} />
            <Button onPress={this.onPressSignIn} title="Sign In"/>
          </View>
          {notifications}
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});
