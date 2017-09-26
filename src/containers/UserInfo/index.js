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
import ImagePicker from 'react-native-image-picker'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// 引入封装组件
import {StatusBar, Navigator} from '../../components'

// 引入action
import * as userAction from '../../store/actions/user';

// 引入样式
import styles from '../../styles/baseStyle'

// 设置常量
const {height, width} = Dimensions.get('window');
const defaultUserImg = require('../../image/defaultUserImg1.jpg')

// 上传图片配置
const options = { // 弹出框配置
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null
    }
  }
  componentDidMount() {
    const {actions} = this.props
    const {navigate} = this.props.navigation;
    storage
      .getItem('useruuid')
      .then(useruuid => {
        if (!useruuid) {
          navigate('Login')
        } else {
          actions.getUserInfo(useruuid)
        }
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#cbcbcb"} barStyle={"light-content"}/>
        <Navigator
          backgroundColor={'#f8f8f8'}
          title={'个人资料'}
          renderLeft={this._navigatorLeft}
          renderRight={this._navigatorRight}/>
        <View
          style={[
          styles.content, {
            backgroundColor: '#f4f4f4'
          }
        ]}>
          <TouchableHighlight
            style={[userInfoStyle.userItem, userInfoStyle.userImg]}
            underlayColor={'rgba(0,0,0,0)'}
            onPress={this._imagePicker}>
            <View style={userInfoStyle.userItemContent}>
              <Text style={userInfoStyle.userItemLeft}>淘宝头像</Text>
              {!this.props.userinfo.userImg
                  ? <Image style={userInfoStyle.userImgImg} source={defaultUserImg}/>
                  : <Image
                    style={userInfoStyle.userImgImg}
                    source={{
                    uri: this.props.userinfo.userImg,
                    cache: 'force-cache'
                  }}/>}
              <FaIcon
                name="angle-right"
                style={userInfoStyle.userItemRightIcon}
                size={24}
                color="#aaaaaa"/>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[userInfoStyle.userItem, userInfoStyle.username]}>
            <View style={userInfoStyle.userItemContent}>
              <Text style={userInfoStyle.userItemLeft}>会员名</Text>
              <Text style={userInfoStyle.userItemRight}>{this.props.userinfo.username}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[userInfoStyle.userItem, userInfoStyle.nickname]}
            underlayColor={'rgba(0,0,0,0)'}>
            <View style={userInfoStyle.userItemContent}>
              <Text style={userInfoStyle.userItemLeft}>淘宝昵称</Text>
              <Text style={userInfoStyle.userItemRight}>{this.props.userinfo.nickname}</Text>
              <FaIcon
                name="angle-right"
                style={userInfoStyle.userItemRightIcon}
                size={24}
                color="#aaaaaa"/>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[userInfoStyle.userItem, userInfoStyle.gender]}
            underlayColor={'rgba(0,0,0,0)'}>
            <View style={userInfoStyle.userItemContent}>
              <Text style={userInfoStyle.userItemLeft}>性别</Text>
              <Text style={userInfoStyle.userItemRight}>{this.props.userinfo.gender}</Text>
              <FaIcon
                name="angle-right"
                style={userInfoStyle.userItemRightIcon}
                size={24}
                color="#aaaaaa"/>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
  _imagePicker = () => {
    ImagePicker.showImagePicker(options, (res) => {
      console.log(res)
      if (res.didCancel) { // 返回
        return
      } else {
        let source; // 保存选中的图片
        source = {
          uri: 'data:image/jpeg;base64,' + res.data
        };

        if (Platform.OS === 'android') {
          source = {
            uri: res.uri
          };
        } else {
          source = {
            uri: res
              .uri
              .replace('file://', '')
          };
        }

        this.setState({avatarSource: source});
      }
    })
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
}

const userInfoStyle = StyleSheet.create({
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#f4f4f4',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  userItemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userItemLeft: {
    flex: 1,
    fontSize: 16,
    color: '#3d4245',
    textAlign: 'left',
    lineHeight: (Platform.OS === 'ios') ? 24 : 16
  },
  userItemRight: {
    flex: 1,
    fontSize: 14,
    color: '#aaaaaa',
    textAlign: 'right',
    lineHeight: (Platform.OS === 'ios') ? 24 : 16
  },
  userItemRightIcon:{
    marginLeft: 10
  },
  userImgImg: {
    marginTop: 5,
    width: 40,
    height: 40,
    borderRadius: 40 / 2
  },
  gender: {
    marginTop: 10
  }
})

// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
  return {userinfo: state.user.userinfo};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)