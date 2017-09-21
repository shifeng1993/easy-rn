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

import StatusBar from '../../components/baseView/StatusBar'
const {height, width} = Dimensions.get('window');

const logo = require('../../image/login-logo.png')

// 引入样式
import styles from '../../styles/baseStyle'
import loginStyle from '../../styles/LoginStyle'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {navigate, goBack, dispatch, state} = this.props.navigation;
    const {actions} = this.props
    const {routes} = this.props;
    const goHome = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Main'})]
    })
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#cf4218"} barStyle={"light-content"}/>
        <View style={styles.content}>
          <TouchableHighlight
            style={styles.headerLeft}
            underlayColor={'#f4f4f4'}
            onPress={() => {
            goBack();
            dispatch(goHome);
          }}>
            <View>
              <FaIcon
                name="angle-left"
                size={24}
                style={{
                textAlign: 'center'
              }}
                color="#333"/>
            </View>
          </TouchableHighlight>

          <View style={styles.headerRight}>
            <Text
              style={{
              color: '#333',
              fontSize: 16,
              textAlign: 'center'
            }}>帮助</Text>
          </View>
          <Image
            style={loginStyle.userImg}
            source={logo}/>
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
