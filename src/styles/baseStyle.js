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
    backgroundColor: '#F5FCFF'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative'
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerRight: {
    position: 'absolute',
    right: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  textInput: {
    padding: 0
  }
});


export default baseStyle