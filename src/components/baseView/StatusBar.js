import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Platform,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

class Status extends Component {
  static defaultProps = {  
    translucent: false, 
    hidden: false,
    barStyle: 'default'
  } 
  render() {
    const {backgroundColor, barStyle, translucent, hidden} = this.props
    if (translucent) {
      if (Platform.OS === 'ios') {
        return (
          <View style = {{ width: width, height: isIphoneX ? 44 : 20,zIndex:1,position:'absolute',backgroundColor: backgroundColor}}>
            <StatusBar barStyle={barStyle} hidden={hidden}/>
          </View>
        )
      } else if (Platform.OS === 'android') {
        return(
          <View style = {{ width: width, height: StatusBar.currentHeight,zIndex:1,position:'absolute',backgroundColor: backgroundColor}}>
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.0)'} barStyle={barStyle} hidden={hidden} translucent={true}/>
          </View>
        )
      }
    } else {
      if (Platform.OS === 'ios') {
        return (
          <View style = {{ height: isIphoneX ? 44 : 20,backgroundColor: backgroundColor}}>
            <StatusBar barStyle={barStyle} hidden={hidden}/>
          </View>
        )
      } else if (Platform.OS === 'android') {
        return(
          <View style = {{ height: StatusBar.currentHeight,backgroundColor: backgroundColor}}>
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.0)'} barStyle={barStyle} hidden={hidden} translucent={true}/>
          </View>
        )
      }
    }
  }
}

export default Status;