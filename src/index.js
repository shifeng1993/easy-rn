import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';
import {StyleSheet} from 'react-native';
// react 原生api Platform.OS判断是否为ios和android

import storage from './utils/storage'
import {Home, Cart, My} from './containers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 进入默认在主页
      selectedTab: 'My'
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="主页"
          titleStyle={styles.tabbarTitle}
          selectedTitleStyle={styles.tabbarTitleSelected}
          renderIcon={() => <Icon name="ios-home-outline" size={28} color="#000"/>}
          renderSelectedIcon={() => <Icon name="ios-home" size={28} color="#000"/>}
          selected={this.state.selectedTab === 'Home'}
          onPress={() => this.setState({selectedTab: 'Home'})}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="购物车"
          titleStyle={styles.tabbarTitle}
          selectedTitleStyle={styles.tabbarTitleSelected}
          renderIcon={() => <Icon name="ios-cart-outline" size={28} color="#000"/>}
          renderSelectedIcon={() => <Icon name="ios-cart" size={28} color="#000"/>}
          selected={this.state.selectedTab === 'Cart'}
          onPress={() => this.setState({selectedTab: 'Cart'})}>
          <Cart/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="我的"
          titleStyle={styles.tabbarTitle}
          selectedTitleStyle={styles.tabbarTitleSelected}
          renderIcon={() => <Icon name="ios-person-outline" size={28} color="#000"/>}
          renderSelectedIcon={() => <Icon name="ios-person" size={28} color="#000"/>}
          selected={this.state.selectedTab === 'My'}
          onPress={() => this.setState({selectedTab: 'My'})}>
          <My/>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  tabbarTitle: {
    color: '#000',
    marginTop: -1,
    marginBottom: 5
  },
  tabbarTitleSelected: {
    color: '#000'
  }
});

export default App;