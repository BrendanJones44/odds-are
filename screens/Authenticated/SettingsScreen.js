import React from 'react';
import {
  AsyncStorage,
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  signout = async () => {
    await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.contentContainer}>
        <Text>Settings Screen</Text>
        <Button title="Log Out" onPress={this.signout} />
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
