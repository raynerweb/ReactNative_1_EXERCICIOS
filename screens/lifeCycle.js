import React from 'react';
import { Text } from 'react-native';

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), loading: true };
  }
  /** Utilize o ciclo de vida do React para fazer o relógio Rodar */

  componentDidMount() {
    this.myTimer = setInterval(() => { this.tick() }, 800);
  }

  componentWillUnmount() {
    clearInterval(this.myTimer)
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <Text>Hello, world!</Text>
        <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
      </>
    );
  }
}
