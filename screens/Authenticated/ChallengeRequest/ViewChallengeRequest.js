import React from 'react';
import {
  View,
  Text
} from 'react-native'

export default class RespondTo extends React.Component {
  
  render() {
    const { navigation } = this.props;
    const challengeRequestId = navigation.getParam('id', 'NO-ID');

    return (
      <View>
        <Text>Respond To {challengeRequestId}</Text>
      </View>
    )}
}