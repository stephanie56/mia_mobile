import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome Back Karl!
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F4D6DE',
  },
  welcome: {
    fontSize:20,
    color:'#777',
    textAlign: 'center',
    margin: 10,
  }
});
