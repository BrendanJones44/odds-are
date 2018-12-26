import React from 'react';
import {
  ScrollView,
  StyleSheet,
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

  render() {
    const notifications = this.state.authorized ? <Notifications token={this.state.token} /> : null;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          { notifications }
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
