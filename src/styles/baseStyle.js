import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  navigator: {
    padding: 10,
    alignItems: 'center',
    position: 'relative'
  },
  navigatorLeft: {
    flex: 1,
    width: 34,
    borderRadius: 5
  },
  navigatorRight: {
    flex: 1,
    width: 34,
    borderRadius: 5
  },
  textInput: {
    padding: 0
  }
});


export default baseStyle