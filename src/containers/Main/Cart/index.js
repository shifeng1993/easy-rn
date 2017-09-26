import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styles from '../../../styles/baseStyle'
class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>购物车</Text>
      </View>
    )
  }
}

export default Cart;