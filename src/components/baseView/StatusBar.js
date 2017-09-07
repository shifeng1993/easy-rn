import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Platform
} from 'react-native';

class Status extends Component {
  render() {
    const {backgroundColor, barStyle} = this.props
    if (Platform.OS === 'ios') {
      return (
        <View style = {{ height: 20,backgroundColor: backgroundColor}}>
          <StatusBar barStyle={barStyle}/ >
        </View>
      )
    } else if (Platform.OS === 'android') {
      return(
        <View style = {{ height: StatusBar.currentHeight,backgroundColor: backgroundColor}}>
          <StatusBar backgroundColor={'rgba(0, 0, 0, 0.0)'} barStyle={barStyle} translucent={true}/ >
        </View>
      )
    }
  }
}

export default Status;