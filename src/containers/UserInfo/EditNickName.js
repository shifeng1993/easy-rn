import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableHighlight,
  Dimensions,
  Platform
} from 'react-native';

// redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// 引入action
import * as userAction from '../../store/actions/user';

// 引入封装组件
import {StatusBar, Navigator} from '../../components'

// 引入样式
import styles from '../../styles/baseStyle'

class EditNickName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: null
    }
  }
  componentWillMount() {
    this.setState({nickname: this.props.navigation.state.params.nickname,useruuid: this.props.navigation.state.params.useruuid})
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#cbcbcb"} barStyle={"light-content"}/>
        <Navigator
          backgroundColor={'#fff'}
          title={'淘宝昵称'}
          renderLeft={this._navigatorLeft}
          renderRight={this._navigatorRight}/>
        <View
          style={[
          styles.content, {
            backgroundColor: '#f4f4f4'
          }
        ]}>
          <View style={EditNickNameStyle.textInput}>
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
              multiline={false}
              autoFocus={false}
              blurOnSubmit={false}
              placeholder={'请输入淘宝昵称'}
              keyboardType={'email-address'}
              placeholderTextColor={'#b5b5b5'}
              onChangeText={(nickname) => this.setState({nickname})}
              value={this.state.nickname}/>
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0)'}
              onPress={() => this.setState((prevState, props) => ({nickname: null}))}>
              {this
                ._returnClearIcon
                .bind(this)('nickname')}
            </TouchableHighlight>
          </View>
          <Text style={EditNickNameStyle.readme}>
            注意：与淘宝业务或买家品牌冲突的昵称，淘宝将有权收回
          </Text>
          <View style={EditNickNameStyle.btnContainer}>
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              style={EditNickNameStyle.saveBtn}
              onPress={this.submitNickname}>
              <Text style={EditNickNameStyle.saveBtnText}>保存</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Toast ref="toast"/>
      </View>
    );
  }
  submitNickname = async() => {
    if(this.state.nickname === this.props.navigation.state.params.nickname){
      this.refs.toast.show('不能与上次昵称相同', 2000);
      return
    }
    const {actions} = this.props
    const params = {
      nickname: this.state.nickname
    }
    actions.patchUserInfo(this.state.useruuid, params)
    actions.setNickName(true)
    navigation.goBack()
  }
  _navigatorLeft = () => {
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
    }}
      color="#333"/>)
  }
  _navigatorRight = () => {
    return (<MCIcon
      name="menu"
      size={24}
      style={{
      textAlign: 'center'
    }}
      onPress={() => {
      alert(1)
    }}
      color="#333"/>)
  }
  _returnClearIcon(key) {
    let $style;
    if (Platform.OS === 'ios') {
      $style = iosStyle
    } else {
      $style = androidStyle
    }
    if (key === 'nickname') {
      if (!this.state.nickname) {
        return (<Text/>)
      } else {
        return (<FaIcon
          name="times-circle"
          style={$style.textInputIcon}
          size={20}
          color="#b5b5b5"/>)
      }
    }
  }
}

const iosStyle = StyleSheet.create({
  textInputIcon: {
    marginLeft: 5
  }
})

const androidStyle = StyleSheet.create({
  textInputIcon: {
    margin: 7,
    marginBottom: 5
  }
})

const EditNickNameStyle = StyleSheet.create({
  textInput: {
    margin: 15,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ff5000',
    padding: 10,
    position: 'relative'
  },
  readme: {
    fontSize: 12,
    color: '#999999',
    margin: 10
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  saveBtn: {
    flex: 1,
    margin: 15,
    padding: 10,
    borderColor: '#e64800',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#ff5000',
    borderRadius: 5
  },
  saveBtnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});

// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
  return {userinfo: state.user.userinfo};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNickName)