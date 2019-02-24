import React from 'react';
import { material } from 'react-native-typography';
import { TextField } from 'react-native-material-textfield';
import { Button, Card } from 'react-native-material-ui';
import { Dropdown } from 'react-native-material-dropdown';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class NewScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    challengeText: "",
    friend: "",
  };


  render() {
    let data = [{
      value: 'Jake Hartwell',
    }, {
      value: 'Sean Fontaine',
    }, {
      value: 'Peter Howard',
    }];
    return (
      
      <View style={styles.contentContainer}>
        <View style={styles.titleWrapper}>
          <Text style={material.display2}>Send an OddsAre</Text>
          <Dropdown
            label='Send to...'
            data={data}
          />
          <TextField
            label='Odds Are they...'
            value={this.state.challengeText}
            onChangeText={ (challengeText) => this.setState({ challengeText }) }
          />
          <Button raised primary text="Send Challenge" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    flex: 1
  },
  titleWrapper: {
    marginTop: 40,
    alignSelf: 'stretch',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});
