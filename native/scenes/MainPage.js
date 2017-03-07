import React, { Component } from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import { Container, Content, Button } from 'native-base';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Natrayle',
      profileUrl: 'https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-9/1689622_10150633964729964_7405000760848561139_n.jpg?oh=1dadb5418422b578f8c7bef32492e131&oe=596B75CF',
      greeting: "**Beeeer Hugs** :)",
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.imagewrapper}>
        <Image style={styles.userprofile} source={{uri:this.state.profileUrl}}/>
      </View>
      <Text style={styles.welcome}>
        Welcome back {this.state.user}!
      </Text>
      <Text>{ this.state.greeting }</Text>
      <View style={styles.buttonwrapper}>
        <Button style={styles.blockButton} block light>
          <Text>Start a New Task</Text>
        </Button>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DFE3EA',
  },
  welcome: {
    fontSize:20,
    fontWeight:'bold',
    textAlign: 'center',
  },
  imagewrapper: {
    width:100,
    height:100,
    borderRadius:100/2,
    overflow:'hidden',
    margin:20,
  },
  userprofile: {
    width:100,
    height:100,
  },
  buttonwrapper: {
    margin:20,
  },

});
