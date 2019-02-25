import React from 'react';
import { material } from 'react-native-typography';
import { Button } from 'react-native-material-ui';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class ViewChallengeResponse extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    guess: 1,
    oddsOutOf: 30
  }

  render() {
    const { navigation } = this.props;
    const challengeFinalizationId = navigation.getParam('id', 'NO-ID');

    return (
      <View style={styles.contentContainer}>
        <View style={styles.titleWrapper}>
          <Text style={[material.display1, { textAlign: "center" }]}>You Lost!</Text>
        </View>
        <View style={styles.challengeBox}>
          <Text style={[material.button, { paddingBottom: 5 }]}>You sent: </Text>
          <View style={styles.challengeTextWrapper}>
            <Text style={[material.headline, { textAlign: "center" }]}>Odds are you eat some pizza</Text>
          </View>
          <View style={styles.challengeOutOfWrapper}>
            <Text style={[material.button, { textAlign: "right", paddingBottom: 5 }]}>Sean fontaine:</Text>
            <Text style={[material.headline, { textAlign: "center" }]}>Set the odds out of: {this.state.oddsOutOf}</Text>
            <Text style={[material.headline, { textAlign: "right" }]}>Picked: 10</Text>

          </View>
          <View style={styles.yourGuessWrapper}>
            <Text style={[material.headline, { paddingBottom: 5 }]}>You guessed:</Text>
            <Text style={[material.headline, { textAlign: "left" }]}>20</Text>
          </View>
          <View style={styles.buttonWrapper}>
            {/* <Text style={[material.headline, { textAlign: "center" }]}>Dare completed</Text> */}
            {/* <Text style={[material.button, { textAlign: "center" }]}>Waiting on Sean Fontaine to mark completed</Text> */}
            <Button raised primary text="Mark Completed" />
          </View>
          

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 2,
    justifyContent: "flex-end"
  },
  challengeText: {
    flex: 1,
  },
  challengeBox: {
    flex: 4,
    backgroundColor: '#EF5350',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  challengeTextWrapper: {
    flex: 4,
  },
  challengeOutOfWrapper: {
    flex: 5,
  },
  oddsOutOfWrapper: {
    flex: 10
  },
  yourGuessWrapper: {
    flex: 3,
  },
  slider: {
    padding: 50
  },
  titleWrapper: {
    marginTop: 20,
    alignSelf: 'stretch',
    flex: 1,
  },
  contentContainer: {
    flex: 4,
    padding: 30,
  },
});
