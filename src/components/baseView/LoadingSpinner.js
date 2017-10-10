import React, {Component} from "react";
import {View, Text, Dimensions, ActivityIndicator} from "react-native";

const {width, height} = Dimensions.get('window');

export default class LoadingSpinner extends Component {

  static defaultProps = {
    width: width,
    height: height,
    spinnerColor: 'dimgray',
    textColor: 'dimgray',
    text: ''
  };

  render() {
    return (
      <View
        style={{
        width: this.props.width,
        height: this.props.height,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color={this.props.spinnerColor}/>
        <View style={{
          height: 10
        }}/>
        <Text note style={{
          color: this.props.textColor
        }}>{this.props.text}</Text>
      </View>
    );
  }
}