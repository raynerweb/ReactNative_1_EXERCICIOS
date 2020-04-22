import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

export default class LiftingUpState extends Component {
    constructor(props) {
        super(props)
        this.onChangeText = this.onChangeText.bind(this);
        this.state = {
            farhenheit: 0,
            celcius: 0
        }
    }

    onChangeText(event, scale) {
        if (scale === 'c') {
            this.setState({ farhenheit: (event * 9 / 5) + 32 });
            this.setState({ celcius: event });
        } else {
            this.setState({ celcius: (event - 32) * 5 / 9 });
            this.setState({ farhenheit: event });
        }
    }

    render() {
        return (
            <>
                <Temperature scale="c" onChangeTemperature={this.onChangeText}
                    temperature={this.state.celcius} />
                <Temperature scale="f" onChangeTemperature={this.onChangeText}
                    temperature={this.state.farhenheit} />
            </>
        );
    }
}

class Temperature extends Component {
    render() {
        return (
            <>
                <Text>Temperatura em {this.props.scale}</Text>
                <TextInput
                    value={`${this.props.temperature}`}
                    onChangeText={(event) => {
                        this.props.onChangeTemperature(event, this.props.scale);
                    }}
                />
            </>
        );
    }
}
