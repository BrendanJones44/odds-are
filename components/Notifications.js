import React from 'react';
import {
  Text,
} from 'react-native';

export default class Notifications extends React.Component {
  constructor(props){
    super(props);
    this.state = { notifications: [] }
  }

  componentDidMount() {
    return fetch("https://what-are-the-odds-are.herokuapp.com/notifications/new", {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Authorization': this.props.token,
        'Content-Type': 'application/json'
      }
    }).then((responseJson) => {
      this.setState({notifications: JSON.parse(responseJson._bodyInit)});
    });
  }

  render() {
    return (
      <Text>
        {JSON.stringify(this.state.notifications)}
      </Text>
    );
  }
}