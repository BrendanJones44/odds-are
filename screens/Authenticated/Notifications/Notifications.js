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
    this.state = { notifications: [
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
    ] }


    // Example notification response= {
    //   "acted_upon_at": null,
    //   "action": "sent you an odds are",
    //   "actor_id": 367,
    //   "clicked_at": null,
    //   "created_at": "2018-12-08T18:43:00.475Z",
    //   "dismiss_type": null,
    //   "id": 1091,
    //   "notifiable_id": 372,
    //   "notifiable_type": "ChallengeRequest",
    //   "read_at": null,
    //   "recipient_id": 363,
    //   "updated_at": "2018-12-08T18:43:00.475Z"
    // },
  }

  // componentDidMount = async () => {
  //   const token = await AsyncStorage.getItem('userToken');
  //   return fetch("https://what-are-the-odds-are.herokuapp.com/notifications/new", {
  //     method: 'GET',
  //     withCredentials: true,
  //     credentials: 'include',
  //     headers: {
  //       'Authorization': token,
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((responseJson) => {
  //     //this.setState({notifications: JSON.parse(responseJson._bodyInit)});
  //   });
  // }

  render() {
    var notifications = this.state.notifications.map(function(notification) {
      return (
        <Notification
          action={notification.action}
          actor={notification.actor}
          key={notification.id}
          time={notification.created_at}
          type={notification.notifiable_type} />
      )
    })

    return (
      <ScrollView contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between'
        }}>
        <View style={styles.contentContainer}>
          {notifications}
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
