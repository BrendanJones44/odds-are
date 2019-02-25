import React from 'react';
import { material } from 'react-native-typography';
import { Button } from 'react-native-material-ui';

import {
  View,
  Text,
  StyleSheet,
  Slider
} from 'react-native'

export default class ViewChallengeResponse extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    guess: 1,
    oddsOutOf: 30
  }

  sliderNumber = () => {
    var rounded = Math.round(this.state.guess);
    if(rounded == this.state.oddsOutOf) {
      return rounded -= 1;
    }else if(this.state.oddsOutOf % 2 == 0 && rounded == this.state.oddsOutOf / 2) {
      return rounded -= 1
    }else {
      return rounded;
    }
  }

  handleSliderChange = (e) => {
    this.setState({ guess: e })
  }

  render() {
    const { navigation } = this.props;
    const challengeResponseId = navigation.getParam('id', 'NO-ID');
   
    return (
      <View style={styles.contentContainer}>
        <View style={styles.titleWrapper}>
          <Text style={[material.display1, { textAlign: "center" }]}>Odds Are Guess</Text>
        </View>
        <View style={styles.challengeBox}>
          <Text style={[material.button, { paddingBottom: 5 }]}>You sent: </Text>
          <View style={styles.challengeTextWrapper}>
            <Text style={[material.headline, { textAlign: "center" }]}>Odds are you eat some pizza</Text>
          </View>
          <View style={styles.challengeOutOfWrapper}>
            <Text style={[material.button, { textAlign: "right", paddingBottom: 5}]}>Sean fontaine:</Text>
            <Text style={[material.headline, { textAlign: "center"}]}>Set the odds out of: {this.state.oddsOutOf}</Text>
          </View>
          <View style={styles.yourGuessWrapper}>
            <Text style={[material.button, { paddingBottom: 5 }]}>Your guess: {this.sliderNumber()}</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={this.state.oddsOutOf}
              value={this.state.guess}
              onValueChange={this.handleSliderChange} />
          </View>
          <Button raised primary text="Send Response" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  challengeText: {
    flex: 2,
  },
  challengeBox: {
    flex: 4,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  challengeTextWrapper: {
    flex: 8
  },
  challengeOutOfWrapper: {
    flex: 8
  },
  oddsOutOfWrapper: {
    flex: 10
  },
  dropDownWrapper: {
    flex: 1,
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
