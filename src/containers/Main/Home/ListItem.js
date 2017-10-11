import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Platform,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const {height, width} = Dimensions.get('window');
class ListItem extends Component {
  render() {
    const {item, itemHeight} = this.props;
    return (
      <TouchableHighlight
        underlayColor={'rgba(0,0,0,0)'}
        onPress={() => navigation.navigate('GoodsDetails', {goodsId: item._id})}>
        <View style={styles.rowItem}>
          <Image
            style={{
            width: 100,
            height: itemHeight,
            backgroundColor: '#e9e9e9'
          }}
            source={{
            uri: item.goodsImg,
            cache: 'force-cache'
          }}/>
          <View
            style={{
            flex: 1,
            height: itemHeight,
            marginLeft: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderColor: '#eeeeee'
          }}>
            <View style={styles.goodsName}>
              <Text style={styles.goodsNameText} numberOfLines={2}>{item.goodsName}</Text>
            </View>
            <View style={styles.supplierNickName}>
              <Text style={styles.supplierNickNameText}>{item.supplier.nickname}</Text>
            </View>
            <View style={styles.goodsAttr}>
              {this._returnAttr('包邮', 1)}
            </View>
            <View style={styles.goodsPrice}>
              <Text style={styles.goodsPriceText}>
                ￥<Text style={{
        fontSize: 20,
        fontWeight: '400'
      }}>{this._returnPrice(item.goodsPrice)[0]}</Text>{'.' + this._returnPrice(item.goodsPrice)[1]}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  _returnPrice(number) {
    return ((number / 100).toString().includes('.')
      ? (((number / 100).toString().split(".")[1].length === 1)
        ? number / 100 + '0'
        : number / 100)
      : number / 100 + '.00')
      .toString()
      .split(".");
  }
  _returnAttr(str, index) {
    if (index === 1) {
      return (
        <View style={{
          width: 10 * str.length + 6
        }}>
          <Text style={styles.goodsAttrText}>{str}</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  rowItem: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5
  },
  goodsName: {
    width: width - 110 - 20,
    height: 32
  },
  goodsNameText: {
    color: '#051b28'
  },
  supplierNickName: {
    height: 22
  },
  supplierNickNameText: {
    color: '#999999',
    fontSize: 12,
    lineHeight: 20
  },
  goodsAttr: {},
  goodsAttrText: {
    padding: 0,
    paddingTop: 2,
    fontSize: 10,
    textAlign: 'center',
    color: '#ffb000',
    borderWidth: 1,
    borderColor: '#ffb000',
    borderRadius: 3
  },
  goodsPrice: {
    height: 30
  },
  goodsPriceText: {
    color: '#ff5000',
    fontWeight: '500'
  }
});

export default ListItem;