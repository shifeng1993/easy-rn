import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions, ActivityIndicator} from 'react-native';

class list extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      data,
      extraData,
      renderItem,
      itemHeight,
      onRefresh,
      onEndReachedThreshold,
      onEndReached,
      style,
      hasMore
    } = this.props
    return (
      <FlatList
        data={data}
        extraData={extraData}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        refreshing={false}
        removeClippedSubviews={false}
        onRefresh={onRefresh}
        onEndReachedThreshold={onEndReachedThreshold}
        ListFooterComponent={this._FooterComponent(hasMore)}
        getItemLayout={(data, index) => ({
        length: itemHeight,
        offset: itemHeight * index,
        index
      })}
        onEndReached={onEndReached}
        sytle={style}/>
    );
  }
  _FooterComponent(hasMore) {
    if(!hasMore){
      return(
        <View style={styles.footer}><Text style={styles.loading}>没有更多了</Text></View>
      )
    } else {
      return(
        <View style={styles.footer}><ActivityIndicator animating={true}/><Text style={styles.loading}>正在加载...</Text></View>
      )
    }
    
  }
}

const styles = StyleSheet.create({
  footer:{
    paddingTop: 5,
    paddingBottom: 10
  },
  loading: {
    textAlign: 'center',
    color: '#999999'
  }
});

export default list;