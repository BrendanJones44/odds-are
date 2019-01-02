import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, Button } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', password: '', token: '', authorized: false }
  }

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
      })
      .then(async () => {
        await AsyncStorage.setItem('userToken', this.state.token);
        this.props.navigation.navigate('App');
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
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
              onChangeText={(userName) => this.setState({ userName })}
              value={this.state.userName}
            />
            <TextField
              label='Password'
              fontSize={20}
              secureTextEntry={true}
              inputContainerStyle={styles.inputStyle}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password} />
            <Button 
              raised
              primary
              onPress={this.onPressSignIn}
              text="Sign In" />
            </Card>
          </View>
        </View>
      </View>
    );
  }
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
