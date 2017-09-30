import React, {Component} from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
import Orientation from 'react-native-orientation';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
// 引入页面容器
import {
  Home,
  Cart,
  My,
  Login,
  SignIn,
  SignUp,
  UserInfo,
  EditNickName
} from '../containers';

// 设置常量
const {height, width} = Dimensions.get('window');
const isIphoneX = () => {
  const {height, width} = Dimensions.get('window');
  let iphoneXAspect = parseFloat((height / width).toString().substring(0, 5))
  if (Platform.OS === 'ios' && iphoneXAspect === 2.165) {
    return true
  } else {
    return false
  }
}
const tabbar = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-home" size={28} color={tintColor}/>),
      tabBarOnPress: (({
        route,
        index
      }, jumpToIndex) => {
        jumpToIndex(index);
      })
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-cart" size={28} color={tintColor}/>),
      tabBarOnPress: (({
        route,
        index
      }, jumpToIndex) => {
        jumpToIndex(index);
      })
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-person" size={28} color={tintColor}/>),
      tabBarOnPress: (({
        route,
        index
      }, jumpToIndex) => {
        jumpToIndex(index);
        storage
          .getItem('useruuid')
          .then(useruuid => {
            if (!useruuid) {
              navigation.navigate('Login')
            } else {
              jumpToIndex(index);
            }
          })
      })
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
        ? ((Orientation.getInitialOrientation() === 'PORTRAIT')
          ? (width / 8)
          : (((Orientation.getInitialOrientation() === 'PORTRAITUPSIDEDOWN')
            ? (width / 8)
            : (height / 8))))
        : ((Orientation.getInitialOrientation() === 'PORTRAIT')
          ? (width / 7 - 5)
          : (((Orientation.getInitialOrientation() === 'PORTRAITUPSIDEDOWN')
            ? (width / 7 - 5)
            : (height / 7 - 5)))),
      backgroundColor: '#fff',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#e4e4e4',
      marginBottom: isIphoneX()
        ? 25
        : 0
    },
    labelStyle: {
      fontSize: (Orientation.getInitialOrientation() === 'PORTRAIT')
        ? (width / 35)
        : (((Orientation.getInitialOrientation() === 'PORTRAITUPSIDEDOWN')
          ? (width / 35)
          : (height / 35)))
    },
    iconStyle: {
      height: (Orientation.getInitialOrientation() === 'PORTRAIT')
        ? (width / 20)
        : (((Orientation.getInitialOrientation() === 'PORTRAITUPSIDEDOWN')
          ? (width / 20)
          : (height / 20)))
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
  },
  UserInfo: {
    screen: UserInfo,
    navigationOptions: {
      header: null
    }
  },
  EditNickName: {
    screen: EditNickName,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Main',
  transitionConfig: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal}),
  // onTransitionStart: () => ({screenInterpolator:
  // CardStackStyleInterpolator.forHorizontal}),
  onTransitionEnd: () => ({screenInterpolator: CardStackStyleInterpolator.forInitial})
});

export default AppNavigator;