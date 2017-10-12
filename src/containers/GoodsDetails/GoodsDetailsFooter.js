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

class GoodsDetailsFooter extends Component {
  render() {
    return (
      <View style={goodsStyle.footer}>
        <TouchableHighlight
          style={{
          flex: 1
        }}
          underlayColor={'rgba(0,0,0,0)'}
          onPress={() => alert(1)}>
          <View
            style={[
            goodsStyle.footerItem, {
              flexDirection: 'column'
            }
          ]}>
            <FaIcon
              style={{
              textAlign: 'center',
              marginTop: 5
            }}
              name="shopping-bag"
              size={20}
              color="#ff5000"/>
            <Text
              style={{
              textAlign: 'center',
              fontSize: 10,
              color: '#666666',
              marginTop: 5
            }}>店铺</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
          flex: 1
        }}
          underlayColor={'rgba(0,0,0,0)'}
          onPress={() => alert(2)}>
          <View
            style={[
            goodsStyle.footerItem, {
              flexDirection: 'column'
            }
          ]}>
            <FaIcon
              style={{
              textAlign: 'center',
              marginTop: 5
            }}
              name="comment"
              size={20}
              color="#828282"/>
            <Text
              style={{
              textAlign: 'center',
              fontSize: 10,
              color: '#666666',
              marginTop: 5
            }}>客服</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
          flex: 1
        }}
          underlayColor={'rgba(0,0,0,0)'}
          onPress={() => alert(3)}>
          <View
            style={[
            goodsStyle.footerItem, {
              flexDirection: 'column'
            }
          ]}>
            <FaIcon
              style={{
              textAlign: 'center',
              marginTop: 5
            }}
              name="star"
              size={20}
              color="#828282"/>
            <Text
              style={{
              textAlign: 'center',
              fontSize: 10,
              color: '#666666',
              marginTop: 5
            }}>收藏</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
          flex: 2,
          backgroundColor: '#ffa802'
        }}
          underlayColor={'#ffa802'}
          onPress={() => alert(4)}>
          <View
            style={[
            goodsStyle.footerItem, {
              flexDirection: 'row'
            }
          ]}>
            <Text
              style={{
              flex: 1,
              textAlign: 'center',
              color: '#fff'
            }}>加入购物车</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
          flex: 2,
          backgroundColor: '#ff5b00'
        }}
          underlayColor={'#ff5b00'}
          onPress={() => alert(5)}>
          <View
            style={[
            goodsStyle.footerItem, {
              flexDirection: 'row'
            }
          ]}>
            <Text
              style={{
              flex: 1,
              textAlign: 'center',
              color: '#fff'
            }}>立即购买</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

export default GoodsDetailsFooter;

const goodsStyle = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: (Orientation.getInitialOrientation() === 'PORTRAIT')
      ? (width / 9 + 3)
      : (((Orientation.getInitialOrientation() === 'PORTRAITUPSIDEDOWN')
        ? (width / 9 + 3)
        : (height / 9 + 3))),
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#cccccc'
  },
  footerItem: {
    flex: 1,
    alignItems: 'center'
  }
})