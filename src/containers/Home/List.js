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

import http from '../../utils/http'
import FlatList from '../../components/advancedView/FlatList'
import ListItem from './ListItem.js'

// 常量设置
const ITEM_HEIGHT = 100;
const PAGE_SIZE = 10;
const INITIAL_PAGE = 1;
const CONTENT_HEIGHT = Dimensions
  .get('window')
  .height - 100;
const TO_END = 0.01;

class List extends Component {
  constructor(props) {
    super(props);
    this.goodsList = {
      data: [],
      currentPage: INITIAL_PAGE,
      pageSize: PAGE_SIZE
    }
    this.state = {
      goodsListData: this.goodsList.data
    }
  }
  getGoodsList(currentPage) {
    let params = {}
    params.currentPage = currentPage;
    params.pageSize = PAGE_SIZE;
    http
      .get('/goods/getGoodsList', params)
      .then(res => {
        if (res.status === 200) {
          if (currentPage === 1) {
            this.goodsList = res.data
          } else {
            this.goodsList.data = this.goodsList.data.concat(res.data.data)
            this.goodsList.pageTotal = parseInt(res.data.pageTotal)
            this.goodsList.currentPage = parseInt(res.data.currentPage)
            this.goodsList.pageSize = parseInt(res.data.pageSize)
          }
          this.setState({goodsListData: this.goodsList.data})
        } else {
          alert(res)
        }
      })
  }
  render() {
    const {item, itemHeight} = this.props
    return (
      <FlatList
        data={this.state.goodsListData}
        extraData={this.state}
        renderItem={({item, index}) => (<ListItem key={index} item={item} itemHeight={ITEM_HEIGHT}/>)}
        itemHeight={ITEM_HEIGHT}
        onRefresh={() => {
        this.getGoodsList(1);
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
    // 用百分比偏移量来限制滑动的力度
    if (info.distanceFromEnd <= CONTENT_HEIGHT * TO_END) {
      if (this.state.goodsListData.length === 0) {
        // 首次加载
        this.getGoodsList(INITIAL_PAGE);
      } else {
        // 后续加载
        if (this._hasMore()) {
          this.getGoodsList(this.goodsList.currentPage + 1);
        }
      }
    }
  }
  // 动态返回有没有更多的布尔值
  _hasMore() {
    // 必须是不等于，如果小于的话，首次加载会出现 "没有更多了"，而不是 "正在加载"
    return this.state.goodsListData.length !== this.goodsList.pageTotal
  }
}

const styles = StyleSheet.create({
  rowItem: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5
  }
});

export default List;