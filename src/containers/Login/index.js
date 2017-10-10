import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {NavigationActions} from "react-navigation";

// 引入action
import * as userAction from '../../store/actions/user';

import {StatusBar, Navigator} from '../../components'
const {height, width} = Dimensions.get('window');

const logo = require('../../image/login-logo.png')

// 引入样式
import styles from '../../styles/baseStyle'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#cf4218"} barStyle={"light-content"}/>
        <Navigator
          backgroundColor={'rgba(0,0,0,0)'}
          renderLeft={this._navigatorLeft}
          renderRight={this._navigatorRight}/>
        <View style={styles.content}>
          <Image style={loginStyle.userImg} source={logo}/>
          <View style={loginStyle.btnContent}>
            <TouchableHighlight
              style={loginStyle.btnItem}
              underlayColor={'#f4f4f4'}
              onPress={() => navigate('SignIn')}>
              <View style={[loginStyle.btn, loginStyle.signInBtn]}>
                <Text
                  style={[
                  loginStyle.btnText, {
                    color: '#fff'
                  }
                ]}>登录</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={loginStyle.btnItem}
              underlayColor={'#f4f4f4'}
              onPress={() => navigate('SignUp')}>
              <View style={[loginStyle.btn, loginStyle.signUpBtn]}>
                <Text
                  style={[
                  loginStyle.btnText, {
                    color: '#ff8901'
                  }
                ]}>新用户注册</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
  _navigatorLeft = () => {
    const goHome = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Main'})]
    })
    return (<MCIcon
      name="arrow-left"
      size={24}
      style={{
      textAlign: 'center'
    }}
      onPress={() => {
      this
        .props
        .navigation
        .goBack();
      this
        .props
        .navigation
        .dispatch(goHome);
    }}
      color="#333"/>)
  }
  _navigatorRight = () => {
    return (
      <Text
        style={{
        color: '#333',
        fontSize: 16,
        textAlign: 'center'
      }}>帮助</Text>
    )
  }
}
// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
  return {userinfo: state.user.userinfo, routes: state.nav.routes};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const loginStyle = StyleSheet.create({
  userImg: {
    width: width / 5 + 5,
    height: width / 5 + 5,
    marginTop: height / 8,
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