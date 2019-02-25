import React from 'react';
import TimeAgo from 'react-native-timeago';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { material } from 'react-native-typography';

export default class Notification extends React.Component {
  notificationText = () => {
    return this.props.actor + " " + this.props.action
  }
  render() {
    return(
      <View style={styles.notification}>
        <Text style={[material.headline, {textAlign: "center", color: "#1e88e5", padding: 5}]}>
          {this.notificationText()}
        </Text>
        <Text style={[material.caption, {textAlign: "center"}]}>
          (<TimeAgo time={"2018-12-08T18:43:00.475Z"} />)
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  notification: {
    height: 120,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
