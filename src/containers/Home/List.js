import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, Dimensions} from 'react-native';
import FlatList from "../../components/advancedView/FlatList";
import ListItem from './ListItem.js'

// 常量设置
const {width, height} = Dimensions.get('window');
const ITEM_HEIGHT = 100;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'list'
    }
  }
  render() {
    return (<FlatList
      layout={this.state.layout}
      onFetch={this._onFetch}
      item={this._renderItem}/>);
  };
  _onFetch = async(page = 1, startFetch, abortFetch) => {
    try {
      let params = {}
      params.currentPage = page;
      params.pageSize = 10;
      let goodList = []
      const res = await http.get('/goods/getGoodsList', params)
      goodList = res.data.data
      startFetch(goodList, 10);
    } catch (err) {
      abortFetch();
      console.log(err);
    }
  };
  _renderItem = (item, index, separator) => {
    if (this.state.layout === 'list') {
      return (<ListItem key={index} item={item} itemHeight={ITEM_HEIGHT}/>);
    } else if (this.state.layout === 'grid') {
      return (<ListItem key={index} item={item} itemHeight={ITEM_HEIGHT}/>);
    }
  };
}

export default List
