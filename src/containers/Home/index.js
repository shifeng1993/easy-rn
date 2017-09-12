import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Orientation from 'react-native-orientation';

import StatusBar from '../../components/baseView/StatusBar'
import List from './List'

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
        <View style={styles.header}>
          <TextInput
            style={styles.serachText}
            underlineColorAndroid="transparent"
            maxLength={40}
            autoFocus={false}
            onChangeText={(serachText) => this.setState({serachText})}
            value={this.state.serachText}/>
        </View>
        <View style={styles.content}>
          <List/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
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
    borderTopWidth: 0.5,
    borderColor: '#d9d9d9'
  }
});

export default Home