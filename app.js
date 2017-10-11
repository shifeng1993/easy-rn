import React, {Component} from "react";
import {Provider, connect} from "react-redux";
import {AsyncStorage, BackHandler, Platform, Dimensions} from "react-native";
import {NavigationActions, addNavigationHelpers} from "react-navigation";
import Orientation from 'react-native-orientation';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-easy-toast';
import Modal from 'react-native-modal';
import http from './src/utils/http';
import getStore from "./src/store";
import AppNavigator from './src/router';

// 全局组件
global.IonIcon = IonIcon
global.FaIcon = FaIcon
global.MCIcon = MCIcon
global.Toast = Toast
global.Modal = Modal

// 识别iphonex
const isIphoneX = () => {
  const {height, width} = Dimensions.get('window');
  let iphoneX = parseFloat((width/height).toString().substring(0,5));
  let iphoneY = parseFloat((height/width).toString().substring(0,5));
  if(Platform.OS === 'ios' && iphoneX === 2.165 || Platform.OS === 'ios' &&  iphoneY === 2.165) {
    return true
  } else {
    return false
  }
}

// 全局定义
global.isIphoneX = isIphoneX()
global.storage = AsyncStorage;
global.http = http;


// 以下是同步路由状态到redux函数
const navReducer = (state, action) => {
  const newState = AppNavigator
    .router
    .getStateForAction(action, state);
  return newState || state;
};

class App extends Component {
  componentWillMount() {
    // 禁止横屏
    Orientation.lockToPortrait();
    storage.getItem('useruuid').then(useruuid => {
      this.setState((prevState, props) => ({useruuid: useruuid}))
    })
  }
  /*处理安卓硬件返回按键 开始*/
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const {dispatch, nav} = this.props;
    const currentScreen = this.getCurrentRouteName(nav)
    const goHome = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ 
          routeName: 'Main'
      })
      ]
    })
    if (nav.index === 0) {
      return false;
    }
    if (currentScreen === 'Login') {
      if (!this.state.useruuid) {
        dispatch(goHome);
      } else {
        dispatch(NavigationActions.back());
      }
    } else{
      dispatch(NavigationActions.back());
    }
    return true;
  };
  /*处理安卓硬件返回按键 结束*/

  getCurrentRouteName = (navigationState) => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route.routeName;
  }

  render() {
    const {dispatch, nav} = this.props;
    const navigation = addNavigationHelpers({dispatch, state: nav});
    global.navigation = navigation
    return (<AppNavigator navigation={navigation}/>);
  }
}

// 根组件连接状态
const AppWithNavigationState = connect((state) => ({nav: state.nav}))(App);

const store = getStore(navReducer);

export default function Root() {
  return (
    <Provider store={store}>
      <AppWithNavigationState/>
    </Provider>
  );
}