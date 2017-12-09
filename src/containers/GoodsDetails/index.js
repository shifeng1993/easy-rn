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
      goods: {},
      visibleModal: null
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
          <GoodsDetailsGoodsInfo
            goods={goods}
            showGoodsAttrModal={() => this._showGoodsAttrModal()}/>
        </ScrollView>
        <GoodsDetailsFooter/>
        <Toast ref="toast"/>
        <Modal
          backdropColor={'black'}
          backdropOpacity={0.4}
          onBackButtonPress={this._hideModal}
          onBackdropPress={this._hideModal}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          isVisible={this.state.visibleModal === 'GoodsAttr'}
          style={{
          justifyContent: 'flex-end',
          margin: 0
        }}>
          <View style={goodsAttrStyle.goodsAttrContainer}>
            <View style={goodsAttrStyle.goodsAttrImg}>
              <Image
                style={{
                width: 110,
                height: 110
              }}
                source={{
                uri: goods.goodsImg,
                cache: 'force-cache'
              }}/>
            </View>
            <View
              style={{
              height: 20,
              backgroundColor: 'rgba(0,0,0,0)'
            }}></View>
            <MCIcon
              name="close-circle-outline"
              size={28}
              style={{
              position: 'absolute',
              zIndex: 1,
              top: 30,
              right: 10
            }}
              onPress={() => {
              this._hideModal()
            }}
              color="#000"/>
            <View style={goodsAttrStyle.goodsAttrContent}>
              <View style={goodsAttrStyle.goodsAttrInfo}>
                <Text
                  style={[goodsAttrStyle.goodsAttrInfoItem, goodsAttrStyle.goodsAttrPriceText]}>￥
                  <Text style={{
                    fontSize: 16
                  }}>{this._returnPrice(goods.goodsPrice)[0]}
                  </Text>
                  {'.' + this._returnPrice(goods.goodsPrice)[1]}
                </Text>
                <Text
                  style={[goodsAttrStyle.goodsAttrInfoItem, goodsAttrStyle.goodsAttrStockText]}>
                  库存1231235件
                </Text>
                <Text
                  style={[goodsAttrStyle.goodsAttrInfoItem, goodsAttrStyle.goodsAttrSelectedText]}>
                  已选："xxxx"
                </Text>
              </View>
              <View style={goodsAttrStyle.goodsAttrFooter}>
                <TouchableHighlight
                  style={[
                  goodsAttrStyle.goodsAttrFooterItem, {
                    backgroundColor: '#ffa301'
                  }
                ]}
                  underlayColor={'#ffa301'}
                  onPress={() => alert(1)}>
                  <View style={goodsAttrStyle.goodsAttrFooterItemContainer}>
                    <Text style={goodsAttrStyle.goodsAttrFooterItemText}>加入购物车</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={[
                  goodsAttrStyle.goodsAttrFooterItem, {
                    backgroundColor: '#ff5700'
                  }
                ]}
                  underlayColor={'#ff5700'}
                  onPress={() => alert(1)}>
                  <View style={goodsAttrStyle.goodsAttrFooterItemContainer}>
                    <Text style={goodsAttrStyle.goodsAttrFooterItemText}>立即购买</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  _showGoodsAttrModal = () => this.setState({visibleModal: 'GoodsAttr'})

  _hideModal = () => this.setState({visibleModal: null})

  _returnPrice = (number) => {
    return ((number / 100).toString().includes('.')
      ? (((number / 100).toString().split(".")[1].length === 1)
        ? number / 100 + '0'
        : number / 100)
      : number / 100 + '.00')
      .toString()
      .split(".");
  }
  _navigatorLeft = () => {
    return (
      <View
        style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: (width - 20) / 10 - 2,
        height: (width - 20) / 10 - 2,
        borderRadius: ((width - 20) / 10 - 2) / 2
      }}>
        <MCIcon
          name="chevron-left"
          size={22}
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
        width: (width - 20) / 10,
        height: (width - 20) / 10,
        borderRadius: (width - 20) / 20
      }}>
        <IonIcon
          name="ios-cart-outline"
          size={22}
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

const goodsAttrStyle = StyleSheet.create({
  goodsAttrContainer: {
    position: 'relative',
    height: width * 1.22 + 20
  },
  goodsAttrImg: {
    position: 'absolute',
    left: 12,
    top: 5,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e6e6e6',
    width: 117,
    height: 117,
    padding: 3
  },
  goodsAttrContent: {
    backgroundColor: '#fff',
    height: width * 1.22
  },
  goodsAttrFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: width,
    height: (Orientation.getInitialOrientation() === 'PORTRAIT')
      ? (width / 9 + 3)
      : (((Orientation.getInitialOrientation() === 'PORTRAITUPSIDEDOWN')
        ? (width / 9 + 3)
        : (height / 9 + 3)))
  },
  goodsAttrFooterItem: {
    flex: 1,
    alignItems: 'center'
  },
  goodsAttrFooterItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  goodsAttrFooterItemText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  },
  goodsAttrInfo: {
    marginLeft: 140,
    marginTop: 10,
    height: 100
  },
  goodsAttrInfoItem: {
    marginTop: 5,
    color: '#3d4245'
  },
  goodsAttrPriceText: {
    color: '#ff5000',
    fontWeight: '500'
  },
  goodsAttrStockText: {},
  goodsAttrSelectedText: {}
})