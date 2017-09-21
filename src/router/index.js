import React, {Component} from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
// 引入页面容器
import {
  Home,
  Cart,
  My,
  Login,
  SignIn,
  SignUp
} from '../containers';

// 设置常量
const {height, width} = Dimensions.get('window');

const tabbar = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-home" size={28} color={tintColor}/>)
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-cart" size={28} color={tintColor}/>)
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-person" size={28} color={tintColor}/>)
    }
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  backBehavior: 'initialRoute',
  tabBarOptions: {
    style: {
      height: (Platform.OS === 'ios')
        ? width / 8
        : width / 7 - 5,
      backgroundColor: '#fff',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#e4e4e4'
    },
    labelStyle: {
      fontSize: width / 35
    },
    iconStyle: {
      height: width / 20
    },
    indicatorStyle: {
      height: 0
    },
    scrollEnabled: false,
    activeBackgroundColor: '#fff',
    activeTintColor: '#ff6600',
    inactiveBackgroundColor: '#fff',
    inactiveTintColor: '#444444',
    showLabel: true,
    showIcon: true
  }
});

const AppNavigator = StackNavigator({
  Main: {
    screen: tabbar,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Main',
  transitionConfig: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal}),
  // onTransitionStart: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal}),
  onTransitionEnd: () => ({screenInterpolator: CardStackStyleInterpolator.forInitial})
});

export default AppNavigator;