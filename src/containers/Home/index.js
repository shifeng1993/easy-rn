import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Orientation from 'react-native-orientation';

import StatusBar from '../../components/baseView/StatusBar'
import List from './List'

// 引入样式
import styles from '../../styles/baseStyle'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serachText: null
    }
  }
  componentWillMount() {
    // 禁止横屏
    Orientation.lockToPortrait();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#cf4218"} barStyle={"light-content"}/>
        <View style={homeStyle.header}>
          <TextInput
            style={[styles.textInput, homeStyle.serachText]}
            underlineColorAndroid="transparent"
            maxLength={40}
            autoFocus={false}
            onChangeText={(serachText) => this.setState({serachText})}
            value={this.state.serachText}/>
        </View>
        <View style={homeStyle.content}>
          <List/>
        </View>
      </View>
    )
  }
}

const homeStyle = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#ff5700',
    marginBottom: 5
  },
  serachText: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    padding: 5,
    color: '#fff',
    fontSize: 16
  },
  content: {
    flex: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#d9d9d9'
  }
});

export default Home