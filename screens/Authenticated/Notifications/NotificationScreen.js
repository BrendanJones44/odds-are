import React from 'react';
import { material } from 'react-native-typography';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Notifications from './Notifications';

export default class NotificationsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.titleWrapper}>
          <Text style={[material.display1, {textAlign: "center"}]}>Your Feed</Text>
        </View>
        <Notifications />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 30,
    flex: 1,
  },
  titleWrapper: {
    marginTop: 20,
  },
});
