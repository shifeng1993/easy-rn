import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const loginStyle = StyleSheet.create({
  userImg: {
    width: width / 5 + 5,
    height: width / 5 + 5,
    marginTop: height / 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: (width / 5 + 5) / 2
  },
  btnContent: {
    marginTop: height / 25
  },
  btnItem: {
    marginTop: height / 20
  },
  btn: {
    width: width * 0.9,
    borderRadius: 18
  },
  signInBtn: {
    backgroundColor: '#ff7000',
    borderWidth: 1,
    borderColor: '#ff7000'
  },
  signUpBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ff5e01'
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

export default loginStyle