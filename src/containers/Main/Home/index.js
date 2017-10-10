// 引入rn基础组件
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

// 引入封装组件
import {StatusBar, Navigator} from '../../../components'
import List from './List'

// 引入样式
import styles from '../../../styles/baseStyle'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serachText: null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#cf4218"} barStyle={"light-content"}/>
        <Navigator backgroundColor={'#ff5700'} renderMiddle={this._NavigatorMiddle}/>
        <View style={homeStyle.content}>
          <List/>
        </View>
      </View>
    )
  }
  _NavigatorMiddle = () => {
    return (<TextInput
      style={[styles.textInput, homeStyle.serachText]}
      underlineColorAndroid="transparent"
      maxLength={40}
      autoFocus={false}
      onChangeText={(serachText) => this.setState({serachText})}
      value={this.state.serachText}/>)
  }
}

const homeStyle = StyleSheet.create({
  header: {
    backgroundColor: '#ff5700'
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