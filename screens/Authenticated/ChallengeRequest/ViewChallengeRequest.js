import React from 'react';
import { material } from 'react-native-typography';
import { Button } from 'react-native-material-ui';

import {
  View,
  Text,
  StyleSheet,
  Slider
} from 'react-native'

export default class RespondTo extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    oddsOutOf: 40
  }
  
  handleSliderChange = (e) => {
    this.setState({oddsOutOf: e})
  }

  render() {
    const { navigation } = this.props;
    const challengeRequestId = navigation.getParam('id', 'NO-ID');
    

    return (
      <View style={styles.contentContainer}>
        <View style={styles.titleWrapper}>
          <Text style={[material.display1, { textAlign: "center" }]}>Alex Walsh sent you an OddsAre</Text>
        </View>
        <View style={styles.challengeBox}>
          <View style={styles.challengeTextWrapper}>
            <Text style={[material.headline, { textAlign: "center"}]}>Odds are you eat some pizza</Text>
          </View>
          <View style={styles.challengeTextWrapper}>
            <Text style={[material.subheading]}>Odds out of: {Math.round(this.state.oddsOutOf)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={3}
              maximumValue={100}
              value={this.state.oddsOutOf}
              onValueChange={this.handleSliderChange}/>
          </View>
          <Button raised primary text="Send Response" />
        </View>
      </View>
    )}
}

const styles = StyleSheet.create({
  challengeText: {
    flex: 2,
  },
  challengeBox: {
    flex: 2,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  challengeTextWrapper: {
    flex: 4
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
    flex: 2,
    padding: 30,
  },
});
