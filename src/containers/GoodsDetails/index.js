import React, {Component} from 'react';
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
import {NavigationActions} from "react-navigation";

const {height, width} = Dimensions.get('window');

// 引入封装组件
import {StatusBar, Navigator} from '../../components';

// 引入页面组件
import GoodsDetailsGoodsInfo from './GoodsDetailsGoodsInfo';
import GoodsDetailsFooter from './GoodsDetailsFooter';

// 引入样式
import styles from '../../styles/baseStyle'

export default class GoodsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsId: null,
      goods: {}
    }
  }
  componentWillMount() {
    for (let i = 0; i < navigation.state.routes.length; i++) {
      if (navigation.state.routes[i].routeName === 'GoodsDetails') {
        this.setState({goodsId: navigation.state.routes[i].params.goodsId})
      }
    }
  }
  componentDidMount() {
    this.getGoodsDetails(this.state.goodsId)
  }
  getGoodsDetails = async(goodsId) => {
    const res = await http.get('/goods/getGoods/' + goodsId)
    this.setState({goods: res.data})
  }
  render() {
    const goods = this.state.goods
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'rgba(0,0,0,0.4)'}
          barStyle={"light-content"}
          translucent={true}/>
        <Navigator
          absolute={true}
          renderLeft={this._navigatorLeft}
          renderRight={this._navigatorRight}/>
        <ScrollView
          style={{
          flex: 1,
          backgroundColor: '#f4f4f4'
        }}>
          <View style={goodsStyle.goodsImg}>
            <Image
              style={goodsStyle.goodsImg}
              source={{
              uri: goods.goodsImg,
              cache: 'force-cache'
            }}/>
          </View>
          <GoodsDetailsGoodsInfo goods={goods}/>
        </ScrollView>
        <GoodsDetailsFooter/>
        <Toast ref="toast"/>
      </View>
    );
  }
  _navigatorLeft = () => {
    return (
      <View
        style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: (width - 20) / 10,
        borderRadius: (width - 20) / 20
      }}>
        <MCIcon
          name="chevron-left"
          size={24}
          style={{
          flex: 1,
          textAlign: 'center'
        }}
          onPress={() => {
          this
            .props
            .navigation
            .goBack();
        }}
          color="#fff"/>
      </View>
    )
  }
  _navigatorRight = () => {
    return (
      <View
        style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: (width - 20) / 10,
        borderRadius: (width - 20) / 20
      }}>
        <IonIcon
          name="ios-cart-outline"
          size={24}
          style={{
          flex: 1,
          textAlign: 'center'
        }}
          onPress={() => {
          navigation.goBack();
          navigation.navigate('Cart')
        }}
          color="#fff"/>
      </View>
    )
  }
}



const goodsStyle = StyleSheet.create({
  goodsImg: {
    height: width
  },
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
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: (Orientation.getInitialOrientation() === 'PORTRAIT')
      ? (width / 10)
      : (((Orientation.getInitialOrientation() === 'PORTRAITUPSIDEDOWN')
        ? (width / 10)
        : (height / 10))),
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#cccccc'
  },
  footerItem: {
    flex: 1,
    alignItems: 'center'
  }
})