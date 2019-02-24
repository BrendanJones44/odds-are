import React from 'react';
import Notification from './Notification';
import {
  View,
  StyleSheet,
  AsyncStorage,
  ScrollView,
} from 'react-native';


export default class Notifications extends React.Component {
  constructor(props){
    super(props);
    this.state = { notifications: [] }
  }

  componentDidMount = async () => {
    // const token = await AsyncStorage.getItem('userToken');
    // return fetch("https://what-are-the-odds-are.herokuapp.com/notifications/new", {
    //   method: 'GET',
    //   withCredentials: true,
    //   credentials: 'include',
    //   headers: {
    //     'Authorization': token,
    //     'Content-Type': 'application/json'
    //   }
    // }).then((responseJson) => {
    //   this.setState({notifications: JSON.parse(responseJson._bodyInit)});
    // });
    this.setState({
      notifications: [
        {
          "id": 1,
          "actor": "Jake Hartwell",
          "action": "sent you an odds are",
          "notifiable_id": 372,
          "notifiable_type": "ChallengeRequest"
        },
        {
          "id": 2,
          "actor": "Sean Fontaine",
          "action": "responded to your odds are",
          "notifiable_id": 373,
          "notifiable_type": "ChallengeResponse"
        },
        {
          "id": 3,
          "actor": "Alex Walsh",
          "action": "completed an odds are",
          "notifiable_id": 324,
          "notifiable_type": "ChallengeFinalization"
        }
      ]
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between'
        }}>
        <View style={styles.contentContainer}>
          
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
        </View>
      </ScrollView>
    );
  }
}

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
