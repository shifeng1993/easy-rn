import React, {Component} from "react";
import {Provider, connect} from "react-redux";
import {AsyncStorage, BackHandler} from "react-native";
import {NavigationActions, addNavigationHelpers} from "react-navigation";
import FaIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import http from './src/utils/http'

global.storage = AsyncStorage;
global.http = http;
global.IonIcon = IonIcon
global.FaIcon = FaIcon

import getStore from "./src/store";
import AppNavigator from './src/router';

const navReducer = (state, action) => {
  const newState = AppNavigator
    .router
    .getStateForAction(action, state);
  return newState || state;
};

const mapStateToProps = (state) => ({nav: state.nav});

class App extends Component {
  /*处理安卓硬件返回按键 开始*/
  componentWillMount() {
    let useruuid =  '';
    storage.getItem('useruuid').then(useruuid => {
      this.setState((prevState, props) => ({useruuid: useruuid}))
    })
  }
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
      if (!this.useruuid) {
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
    return (<AppNavigator navigation={navigation}/>);
  }
}

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(navReducer);

export default function Root() {
  return (
    <Provider store={store}>
      <AppWithNavigationState/>
    </Provider>
  );
}