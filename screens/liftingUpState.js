import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

export default class LiftingUpState extends Component {
    constructor(props) {
        super(props)
        this.onChangeText = this.onChangeText.bind(this);
        this.farhenheit = 0;
        this.celcius = 0;
        // this.state = {
        //     farhenheit: 0
        // }
    }

    onChangeText(event, scale) {
        if (scale === 'c') {
            this.farhenheit = (event * 9 / 5) + 32
            this.celcius = event
        } else {
            this.farhenheit = event;
            this.celcius = (this.farhenheit - 32) * 5 / 9;
        }
    }

    render() {
        return (
            <>
                <Temperature scale="c" onChangeTemperature={this.onChangeText} temperature={this.celcius} />
                <Temperature scale="f" onChangeTemperature={this.onChangeText} temperature={this.farhenheit} />
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
