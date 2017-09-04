import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Platform
} from 'react-native';

class ListItem extends Component {
  render() {
    const {item, itemHeight} = this.props
    return (
      <View style={styles.rowItem}>
        <Image
          style={{
          width: 100,
          height: itemHeight
        }}
          source={{
          uri: item.goodsImg
        }}/>
        <View style={{
          flex: 1,
          height: itemHeight
        }}>
          <View style={styles.goodsName}>
            <Text>{item.goodsName}</Text>
          </View>
          <View style={styles.goodsPrice}>
            <Text>{((item.goodsPrice / 100).toString().includes('.')
                ? (((item.goodsPrice / 100).toString().split(".")[1].length === 1)
                  ? item.goodsPrice / 100 + '0'
                  : item.goodsPrice / 100)
                : item.goodsPrice / 100 + '.00').toString().split(".")[0]}</Text>
            <Text>{'.' + ((item.goodsPrice / 100).toString().includes('.')
                ? (((item.goodsPrice / 100).toString().split(".")[1].length === 1)
                  ? item.goodsPrice / 100 + '0'
                  : item.goodsPrice / 100)
                : item.goodsPrice / 100 + '.00')
                .toString()
                .split(".")[1]}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowItem: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5
  }
});

export default ListItem;