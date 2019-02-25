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
    oddsOutOf: 30,
    status: "nobody", //nobody loser winner
    completionStatus: "userMarked"
  }

  bottomDisplay = () => {
    if(this.state.status != "nobody"){
      switch (this.state.completionStatus) {
        case "userMarked":
          return (
            <View style={styles.buttonWrapper}>
              <Text style={[material.button, { textAlign: "center" }]}>Waiting on Sean Fontaine to mark completed</Text>
            </View>
          )
        case "bothMarked":
          return (
            < View style={styles.buttonWrapper} >
              <Text style={[material.headline, { textAlign: "center" }]}>Dare completed</Text>
            </View >
          )
        default:
          return (
            < View style={styles.buttonWrapper} >
              <Button raised primary text="Mark Completed" />
            </View >
          )
      }
    }
  }

  titleText = () => {
    switch(this.state.status) {
      case "winner":
        return "You won!";
      case "loser":
        return "You lost!"
      default:
        return "Nobody won!"
    }
  }

  bodyStyle = () => {
    switch (this.state.status) {
      case "winner":
        return {
          flex: 4,
          backgroundColor: '#00E676',
          borderRadius: 10,
          padding: 20,
          margin: 10,
        }
      case "loser":
        return {
          flex: 4,
          backgroundColor: '#EF5350',
          borderRadius: 10,
          padding: 20,
          margin: 10,
        }
      default:
        return {
          flex: 4,
          backgroundColor: 'lightgrey',
          borderRadius: 10,
          padding: 20,
          margin: 10,
        }
    }
  }
  render() {
    const { navigation } = this.props;
    const challengeFinalizationId = navigation.getParam('id', 'NO-ID');


    return (
      <View style={styles.contentContainer}>
        <View style={styles.titleWrapper}>
          <Text style={[material.display1, { textAlign: "center" }]}>{this.titleText()}</Text>
        </View>
        <View style={this.bodyStyle()}>
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
          {this.bottomDisplay()}
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
  challengeBoxLoser: {
    flex: 4,
    backgroundColor: '#EF5350',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  challengeBoxWinner: {
    flex: 4,
    backgroundColor: '#EF5350',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  challengeBoxNobody: {
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
