import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import Orientation from 'react-native-orientation';

const {height, width} = Dimensions.get('window');

class GoodsDetailsGoodsInfo extends Component {
  render() {
    const goods = this.props.goods
    return (
      <View style={goodsStyle.goodsInfo}>
        <View style={goodsStyle.goodsName}>
          <Text style={goodsStyle.goodsNameText} numberOfLines={2}>{goods.goodsName}</Text>
        </View>
        <View style={goodsStyle.goodsPrice}>
          <Text style={goodsStyle.goodsPriceText}>￥<Text style={{
        fontSize: 20,
        fontWeight: '400'
      }}>{this._returnPrice(goods.goodsPrice)[0]}</Text>{'.' + this._returnPrice(goods.goodsPrice)[1]}</Text>
        </View>
        <View style={goodsStyle.common}>
          <Text
            style={[
            goodsStyle.commonItem, {
              textAlign: 'left'
            }
          ]}>快递：免运费</Text>
          <Text
            style={[
            goodsStyle.commonItem, {
              textAlign: 'center'
            }
          ]}>月销2222笔</Text>
          <Text
            style={[
            goodsStyle.commonItem, {
              textAlign: 'right'
            }
          ]}>上海</Text>
        </View>
        <View style={goodsStyle.common}>
          <Text
            style={[
            goodsStyle.commonItem, {
              textAlign: 'left',
              color: '#828282',
              fontSize: 12,
              marginRight: width / 10
            }
          ]}>
            <FaIcon name="check-circle-o" size={12} color="#ff5000"/>订单险</Text>
          <Text
            style={[
            goodsStyle.commonItem, {
              textAlign: 'left',
              color: '#828282',
              fontSize: 12,
              marginRight: width / 10
            }
          ]}>
            <FaIcon name="check-circle-o" size={12} color="#ff5000"/>坏单包赔</Text>
          <Text
            style={[
            goodsStyle.commonItem, {
              textAlign: 'left',
              color: '#828282',
              fontSize: 12,
              marginRight: width / 10
            }
          ]}><FaIcon name="check-circle-o" size={12} color="#ff5000"/>7天无理由</Text>
        </View>
        <View style={goodsStyle.goodsAttr}></View>
        <View style={goodsStyle.goodsParams}></View>
      </View>
    );
  }
  _returnPrice = (number) => {
    return ((number / 100).toString().includes('.')
      ? (((number / 100).toString().split(".")[1].length === 1)
        ? number / 100 + '0'
        : number / 100)
      : number / 100 + '.00')
      .toString()
      .split(".");
  }
}

export default GoodsDetailsGoodsInfo;

const goodsStyle = StyleSheet.create({
  goodsInfo: {
    padding: 10,
    marginLeft: 5,
    marginRight: 5
  },
  goodsName: {
    width: width - 110 - 20,
    height: 32
  },
  goodsNameText: {
    color: '#051b28'
  },
  goodsPrice: {
    height: 30
  },
  goodsPriceText: {
    color: '#ff5000',
    fontWeight: '500'
  },
  common: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  commonItem: {
    flex: 1,
    color: '#828282',
    fontSize: 12
  },
  goodsAttr: {
    height: 100
  },
  goodsParams: {
    height: 100
  }
})