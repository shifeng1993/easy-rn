import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import {DrawerNavigator, StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
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
  EditNickName,
  GoodsDetails
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

const Home1 = ({navigation}) => (
  <View>
    <Text>Home1</Text>
    <Button
      title="Open Home Drawer"
      onPress={() => navigation.navigate('DrawerOpen')}/>
  </View>
);

const index = DrawerNavigator({
  main: {
    screen: Cart
  },
  Home1: {
    screen: Home1
  }
}, {
  contentComponent: props => <View>
      <Text>hello</Text>
    </View>
})

const tabbar = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-home" size={28} color={tintColor}/>)
    }
  },
  Cart: {
    screen: index,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-cart" size={28} color={tintColor}/>)
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (<IonIcon name="ios-person" size={28} color={tintColor}/>),
      tabBarOnPress: ((e) => {
        storage.getItem('useruuid').then(useruuid => {
          if (!useruuid) {
            navigation.navigate('Login')
          } else {
            e.jumpToIndex(e.scene.index);
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
      header: null,
      gesturesEnabled: false
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
      header: null,
      gesturesEnabled: false
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  UserInfo: {
    screen: UserInfo,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  EditNickName: {
    screen: EditNickName,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  GoodsDetails: {
    screen: GoodsDetails,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
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