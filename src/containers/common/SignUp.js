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

// 引入action
import * as userAction from '../../store/actions/user';

import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../components/baseView/StatusBar'
const {height, width} = Dimensions.get('window');

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
            style={styles.userImg}
            source={{
            uri: 'https://api.shifeng1993.com/img/11.jpg'
          }}/>
          <View style={styles.btnContent}>
            <TouchableHighlight
              style={styles.btnItem}
              underlayColor={'#f4f4f4'}
              onPress={() => alert('足迹')}>
              <View style={[styles.btn, styles.signInBtn]}>
                <Text
                  style={[
                  styles.btnText, {
                    color: '#fff'
                  }
                ]}>登录</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.btnItem}
              underlayColor={'#f4f4f4'}
              onPress={() => alert('足迹')}>
              <View style={[styles.btn, styles.signUpBtn]}>
                <Text
                  style={[
                  styles.btnText, {
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
  return {userinfo: state.user.userinfo};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative'
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerRight: {
    position: 'absolute',
    right: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
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
});
