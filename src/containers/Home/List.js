import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import FlatList from '../../components/advancedView/FlatList'
import ListItem from './ListItem.js'

// 引入action
import * as goodsAction from '../../store/actions/goods';

// 常量设置
const ITEM_HEIGHT = 100;
const INITIAL_PAGE = 1;
const CONTENT_HEIGHT = Dimensions
  .get('window')
  .height - 100;
const TO_END = 0.000001;

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {item, itemHeight} = this.props
    const {actions} = this.props
    return (
      <FlatList
        data={this.props.goodsList.data}
        extraData={this.state}
        renderItem={({item, index}) => (<ListItem key={index} item={item} itemHeight={ITEM_HEIGHT}/>)}
        itemHeight={ITEM_HEIGHT}
        onRefresh={() => {
        actions.getGoodsList(INITIAL_PAGE);
      }}
        onEndReachedThreshold={TO_END}
        onEndReached={(info) => {
        this._appendList(info);
      }}
        style={{
        height: CONTENT_HEIGHT
      }}
        hasMore={this._hasMore()}/>
    );
  }

  _appendList(info) {
    const {actions} = this.props
    // 用百分比偏移量来限制滑动的力度
    if (info.distanceFromEnd <= CONTENT_HEIGHT * TO_END) {
      if (this.props.goodsList.data.length === 0) {
        // 首次加载
        actions.getGoodsList(INITIAL_PAGE);
      } else {
        // 后续加载
        if (this._hasMore()) {
          const currentPage = parseInt(this.props.goodsList.currentPage)
          actions.getGoodsList(currentPage + 1);
        }
      }
    }
  }
  // 动态返回有没有更多的布尔值
  _hasMore() {
    // 必须是不等于，如果小于的话，首次加载会出现 "没有更多了"，而不是 "正在加载"
    return this.props.goodsList.data.length !== this.props.goodsList.pageTotal
  }
}

const styles = StyleSheet.create({
  rowItem: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5
  }
});

// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
  return {goodsList: state.goods.goodsList};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(goodsAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(List)