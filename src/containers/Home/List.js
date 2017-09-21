import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, Dimensions} from 'react-native';
import FlatList from "../../components/advancedView/FlatList";
import ListItem from './ListItem.js'

// 常量设置
const {width, height} = Dimensions.get('window');
const ITEM_HEIGHT = 100;
const PAGE_SIZE = 100

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'list',
      isViewables: []
    }
  }
  render() {
    return (<FlatList
      layout={this.state.layout}
      onFetch={this._onFetch}
      item={this._renderItem}
      onEndReachedThreshold={0.1}/>);
  };
  _onFetch = async(page = 1, startFetch, abortFetch) => {
    try {
      let params = {}
      params.currentPage = page;
      params.pageSize = PAGE_SIZE;
      let goodList = []
      const res = await http.get('/goods/getGoodsList', params)
      goodList = res.data.data
      startFetch(goodList, PAGE_SIZE);
    } catch (err) {
      abortFetch();
      console.log(err);
    }
  };
  _renderItem = (item, index, separator) => {
    if (this.state.layout === 'list') {
      return (<ListItem key={index} item={item} itemHeight={ITEM_HEIGHT}/>);
    }
  };
}

export default List
