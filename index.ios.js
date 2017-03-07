import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './native/App';

export default class Mia extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Mia', () => Mia);
