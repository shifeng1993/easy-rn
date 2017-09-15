import React, {Component} from "react";
import {Provider, connect} from "react-redux";
import {AsyncStorage, BackHandler} from "react-native";
import {NavigationActions, addNavigationHelpers} from "react-navigation";

global.storage = AsyncStorage;

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
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
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
    const currentScreen = this.getCurrentRouteName(this.props.nav)
    const {dispatch, nav} = this.props;
    const navigation = addNavigationHelpers({dispatch, state: nav});

    if (currentScreen === 'My') {
      storage.getItem('useruuid').then(useruuid => {
          if (!useruuid) {
            navigation.navigate('Login')
          } else {
            return
          }
        })
    }
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
