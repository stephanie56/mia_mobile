import React, { Component } from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import { Container, Content, Button } from 'native-base';

export default class GreetingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Natrayle',
      profileUrl: 'https://cdn.dribbble.com/users/2008/screenshots/893577/dribbble-arctocat.png',
      greeting: "**Beeeer Hugs** :)",
    }
  }
  render() {
    return (
      <Image style={styles.backgroundImage} source={{uri:'https://s-media-cache-ak0.pinimg.com/736x/0a/87/ba/0a87ba962e2a39503f70efdafb298287.jpg'}}>
        <View style={styles.container}>
        <View style={styles.imagewrapper}>
          <Image style={styles.userprofile} source={{uri:this.state.profileUrl}}/>
        </View>
        <Text style={styles.welcome}>
          Welcome back {this.state.user}!
        </Text>
        <Text style={styles.greeting}>{ this.state.greeting }</Text>
        <View style={styles.buttonwrapper}>
          <Button style={styles.blockButton} block light>
            <Text>Start a New Task</Text>
          </Button>
        </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(0,0,0,0)',

  },
  backgroundImage:{
    flex:1,
    width:null,
    height:null,
  },
  welcome: {
    fontSize:20,
    fontWeight:'bold',
    textAlign: 'center',
  },
  imagewrapper: {
    width:150,
    height:150,
    borderRadius:150/2,
    overflow:'hidden',
    margin:20,
  },
  userprofile: {
    width:150,
    height:150,
  },
  buttonwrapper: {
    margin:20,
  },

});
