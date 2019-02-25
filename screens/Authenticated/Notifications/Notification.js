import React from 'react';
import TimeAgo from 'react-native-timeago';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { material } from 'react-native-typography';

class Notification extends React.Component {
  notificationText = () => {
    return this.props.actor + " " + this.props.action
  }
  handlePress = () => {
    this.props.navigation.navigate(this.props.type, {
      id: this.props.id
    });
  }
  render() {
    return(
      <TouchableOpacity style={styles.notification} onPress={this.handlePress}>
        <Text style={[material.headline, {textAlign: "center", color: "#1e88e5", padding: 5}]}>
          {this.notificationText()}
        </Text>
        <Text style={[material.caption, {textAlign: "center"}]}>
          (<TimeAgo time={this.props.time} />)
        </Text>
      </TouchableOpacity>
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

export default withNavigation(Notification);

