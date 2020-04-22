import React, { Component } from 'react';
import { Button, Text } from 'react-native';

export default class EventHandlers extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.add = this.add.bind(this)
  }


  add() {
    this.setState({ counter: ++this.state.counter })
  }

  render() {
    return (
      <>
        <Text>{this.state.counter}</Text>
        <Button title="Press me" onPress={this.add} />
      </>
    );
  }
}
