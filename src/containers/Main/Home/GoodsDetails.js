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
      nickname: null
    }
  }
  render() {
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
        ]}>
        </View>
        <Toast ref="toast"/>
      </View>
    );
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