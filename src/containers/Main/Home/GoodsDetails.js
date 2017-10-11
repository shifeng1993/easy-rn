import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

// redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// 引入action
import * as goodsAction from '../../../store/actions/goods';

// 引入封装组件
import {StatusBar, Navigator} from '../../../components'

// 引入样式
import styles from '../../../styles/baseStyle'

class GoodsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsId: null
    }
  }
  componentWillMount() {
    for (let i = 0; i < navigation.state.routes.length; i++) {
      if (navigation.state.routes[i].routeName === 'GoodsDetails') {
        this.setState({goodsId: navigation.state.routes[i].params.goodsId})
      }
    }
  }
  render() {
    console.log(this.state.goodsId)
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#cbcbcb"} barStyle={"light-content"}/>
        <Navigator
          backgroundColor={'#fff'}
          title={'商品详情'}
          renderLeft={this._navigatorLeft}
          renderRight={this._navigatorRight}/>
        <View
          style={[
          styles.content, {
            backgroundColor: '#f4f4f4'
          }
        ]}></View>
        <Toast ref="toast"/>
      </View>
    );
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

// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
  return {goods: state.goods.goods};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(goodsAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetails)