import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Dimensions,
  Platform,
  TouchableHighlight
} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// 引入action
import * as userAction from '../../store/actions/user';

import http from '../../utils/http'
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../components/baseView/StatusBar'
const {height, width} = Dimensions.get('window');

// 引入样式
import styles from '../../styles/baseStyle'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      seePassword: true
    }
  }
  signIn() {
    let params = {};
    params.username = this.state.username
    params.password = this.state.password
    http.post('/user/signIn', params).then(res=>{
      if (res.status === 200) {
        if(res.data.message === '登录成功'){
          storage.setItem('useruuid', res.data.useruuid)
          this.props.navigation.navigate('Home')
        } else{
          alert(res.data.message)
        }
      }else{
        alert('登录失败，请重试')
      }
    });
  }
  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#cf4218"} barStyle={"light-content"}/>
        <View style={styles.content}>
          <TouchableHighlight
            style={styles.headerLeft}
            underlayColor={'#f4f4f4'}
            onPress={() => goBack()}>
            <View>
              <Icon
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
            style={signInStyle.userImg}
            source={{
            uri: 'http://192.168.212.60:3333/img/12.jpg'
          }}/>
          <View style={signInStyle.signInContent}>
            <View style={signInStyle.textInput}>
              <TextInput
                style={[
                styles.textInput, {
                  flex: 1,
                  fontSize: 16,
                  color: '#333'
                }
              ]}
                underlineColorAndroid="transparent"
                maxLength={40}
                autoFocus={false}
                placeholder={'手机号/账号/邮箱'}
                placeholderTextColor={'#b5b5b5'}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}/>
              <TouchableHighlight
                underlayColor={'rgba(0,0,0,0)'}
                onPress={() => this.setState((prevState, props) => ({username: null}))}>
                {this._returnClearIcon.bind(this)('username')}
              </TouchableHighlight>
            </View>
            <View style={signInStyle.textInput}>
              <TextInput
                style={[
                styles.textInput, {
                  flex: 1,
                  fontSize: 16,
                  color: '#333'
                }
              ]}
                underlineColorAndroid="transparent"
                secureTextEntry={this.state.seePassword}
                maxLength={40}
                autoFocus={false}
                placeholder={'请输入密码'}
                placeholderTextColor={'#b5b5b5'}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
              <TouchableHighlight
                underlayColor={'rgba(0,0,0,0)'}
                onPress={() => this.setState((prevState, props) => ({password: null}))}>
                {this._returnClearIcon.bind(this)('password')}
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                marginLeft: 7
              }}
                underlayColor={'rgba(0,0,0,0)'}
                onPress={this
                ._seePassword
                .bind(this)}>
                {this._returnSeeIcon()}
              </TouchableHighlight>
            </View>

            <TouchableHighlight
              style={signInStyle.btnItem}
              underlayColor={'rgba(0,0,0,0)'}
              onPress={this.signIn.bind(this)}>
              <View style={[signInStyle.btn, signInStyle.signInBtn]}>
                <Text
                  style={[
                  signInStyle.btnText, {
                    color: '#fff'
                  }
                ]}>登录</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
  _returnClearIcon (key) {
    let $style; 
    if (Platform.OS === 'ios') {
      $style = iosStyle
    }else{
      $style = androidStyle
    }
    if(key === 'username'){
      if (!this.state.username) {
        return (<Text/>)
      }else{
        return (<Icon name="times-circle" style={$style.textInputIcon} size={16} color="#b5b5b5"/>)
      }
    } else if(key === 'password'){
      if (!this.state.password) {
        return (<Text/>)
      }else{
        return (<Icon name="times-circle" style={$style.textInputIcon} size={16} color="#b5b5b5"/>)
      }
    }
    
  }
  _returnSeeIcon() {
    let $style; 
    if (Platform.OS === 'ios') {
      $style = iosStyle
    }else{
      $style = androidStyle
    }
    if (this.state.seePassword) {
      return (<Icon name="eye" style={$style.textInputIcon} size={14} color="#b5b5b5"/>)
    } else {
      return (<Icon name="eye-slash" style={$style.textInputIcon} size={14} color="#b5b5b5"/>)
    }
  }
  _seePassword() {
    if (this.state.seePassword) {
      this.setState((prevState, props) => ({seePassword: false}));
    } else {
      this.setState((prevState, props) => ({seePassword: true}));
    }
  }
}
// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
  return {userinfo: state.user.userinfo};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

const iosStyle = StyleSheet.create({
})

const androidStyle = StyleSheet.create({
  textInputIcon:{
    margin: 7,
    marginBottom: 5
  },
})

const signInStyle = StyleSheet.create({
  userImg: {
    width: width / 6,
    height: width / 6,
    marginTop: height / 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: width / 6 / 2
  },
  signInContent: {
    marginTop: height / 25
  },
  textInput: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#ff5000',
    marginTop: height / 20 / 2,
    padding: 5,
    position: 'relative'
  },
  btnItem: {
    marginTop: height / 10
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
});