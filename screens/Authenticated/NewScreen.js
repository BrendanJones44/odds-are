import React from 'react';
import { material } from 'react-native-typography';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-material-ui';
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
          <Text style={[material.display1, {textAlign: "center"}]}>Send an OddsAre</Text>
        </View>
        <View style={styles.spaceUnderTitle}/>
        <View style={styles.dropDownWrapper}>
          <Dropdown
            label='Send to...'
            data={data}
          />
        </View>
        <View style={styles.challengeTextWrapper}>
          <TextField
            label='Odds Are they...'
            value={this.state.challengeText}
            style={styles.challengeText}
            onChangeText={ (challengeText) => this.setState({ challengeText }) }
          />
        </View>
        <Button raised primary text="Send Challenge" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  challengeText: {
    flex: 2,
  },
  challengeTextWrapper: {
    flex: 2,
  },
  dropDownWrapper: {
    flex: 1,
  },
  titleWrapper: {
    marginTop: 20,
    alignSelf: 'stretch',
    flex: 1,
  },
  contentContainer: {
    flex: 2,
    padding: 30,
  },
});
