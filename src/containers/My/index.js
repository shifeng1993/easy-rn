import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Button,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../components/baseView/StatusBar'
import BadgeView from '../../components/advancedView/BadgeView'

const {height, width} = Dimensions.get('window');
const useruuid = '';
const setBtnStr = '设置'
const summary = '超级会员'
class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {}
    }
  }
  signIn() {}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#6d5737'} barStyle={'light-content'}/>
        <View style={styles.header}>
          <View style={styles.headerBtn}>
            <TouchableHighlight
              style={styles.setBtn}
              underlayColor={'rgba(0,0,0,0.1)'}
              onPress={() => alert(setBtnStr)}>
              <Text style={styles.setBtnText}>{setBtnStr}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{
              flex: 8
            }}><View/></TouchableHighlight>
            <TouchableHighlight
              style={styles.messageBtn}
              underlayColor={'rgba(0,0,0,0.0)'}
              onPress={() => alert(setBtnStr)}>
              <Icon
                name="magic"
                size={20}
                style={styles.messageBtnText}
                color="#fff"/>
            </TouchableHighlight>
          </View>
          <View style={styles.user} underlayColor={'rgba(0,0,0,0.1)'}>
            <Image
              style={styles.userImg}
              source={{
              uri: 'http://192.168.212.60:3333/img/12.jpg'
            }}/>
            <View style={styles.userInfo}>
              <Text style={styles.nickname}>落英花海</Text>
              <View style={styles.summary}>
                <Text style={styles.summaryText}>{summary}</Text>
              </View>
            </View>
            <TouchableHighlight style={styles.headerRight}>
              <Text style={styles.headerRightText}>
                <Icon name="vimeo-square" size={14} color="#fff"/>
                <Text> 淘气值</Text>
                <Text> 1060 </Text><Icon name="angle-right" size={14} color="#fff"/>
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.favoriteWrap}>
            <TouchableHighlight
              style={styles.favoriteWrapItem}
              underlayColor={'#f4f4f4'}
              onPress={() => navigate('Login')}>
              <View>
                <Text style={styles.favoriteWrapItemNumber}>89</Text>
                <Text style={styles.favoriteWrapItemText}>收藏夹</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.favoriteWrapItem}
              underlayColor={'#f4f4f4'}
              onPress={() => alert('关注店铺')}>
              <View>
                <Text style={styles.favoriteWrapItemNumber}>68</Text>
                <Text style={styles.favoriteWrapItemText}>关注店铺</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.favoriteWrapItem}
              underlayColor={'#f4f4f4'}
              onPress={() => alert('足迹')}>
              <View>
                <Text style={styles.favoriteWrapItemNumber}>327</Text>
                <Text style={styles.favoriteWrapItemText}>足迹</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.myOrdersWrapMore}>
            <View style={{flex: 3,justifyContent:'center'}}><Text style={styles.myOrdersTitle}>我的订单</Text></View>
            <View style={{flex: 6}}></View>
            <View>
            <View style={{flex: 1,justifyContent:'center'}}><Text style={styles.seeMyOrder}>查看更多订单 <Icon name="angle-right" size={14} color="#cccccc"/></Text></View>
            </View>
          </View>
          <View style={styles.myOrdersWrap}>
            <BadgeView TouchableHighlightStyle={styles.myOrdersWrapItem} underlayColor={'#f4f4f4'}
              onPress={() => alert('待付款')}
              renderHTML={()=>
                <View>
                  <Text style={styles.myOrdersWrapItemIcon}><Icon name="cc-visa" size={width/5/4} color="#ff6900"/></Text>
                  <Text style={styles.myOrdersWrapItemText}>待付款</Text>
                </View>
              }
            />
            <BadgeView TouchableHighlightStyle={styles.myOrdersWrapItem} underlayColor={'#f4f4f4'}
              onPress={() => alert('待发货')}
              renderHTML={()=>
                <View>
                  <Text style={styles.myOrdersWrapItemIcon}><Icon name="send" size={width/5/4} color="#ff6900"/></Text>
                  <Text style={styles.myOrdersWrapItemText}>待发货</Text>
                </View>
              }
            />
            <BadgeView TouchableHighlightStyle={styles.myOrdersWrapItem} underlayColor={'#f4f4f4'}
              onPress={() => alert('待收货')}
              badgeText={99}
              badgeColor={'#ff6700'}
              renderHTML={()=>
                <View>
                  <Text style={styles.myOrdersWrapItemIcon}><Icon name="truck" size={width/5/4} color="#ff6900"/></Text>
                  <Text style={styles.myOrdersWrapItemText}>待收货</Text>
                </View>
              }
            />
            <BadgeView TouchableHighlightStyle={styles.myOrdersWrapItem} underlayColor={'#f4f4f4'}
              onPress={() => alert('待评价')}
              renderHTML={()=>
                <View>
                  <Text style={styles.myOrdersWrapItemIcon}><Icon name="comment" size={width/5/4} color="#ff6900"/></Text>
                  <Text style={styles.myOrdersWrapItemText}>待评价</Text>
                </View>
              }
            />
            <BadgeView TouchableHighlightStyle={styles.myOrdersWrapItem} underlayColor={'#f4f4f4'}
              onPress={() => alert('退款/售后')}
              renderHTML={()=>
                <View>
                  <Text style={styles.myOrdersWrapItemIcon}><Icon name="cny" size={width/5/4} color="#ff6900"/></Text>
                  <Text style={styles.myOrdersWrapItemText}>退款/售后</Text>
                </View>
              }
            />
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#f4f4f4'
  },
  header: {
    height: height / 5 + 15,
    backgroundColor: '#d4ae6d'
  },
  headerBtn: {
    padding: 5,
    marginBottom: -10,
    paddingRight: 0,
    paddingBottom: 0,
    flex: 1,
    flexDirection: 'row'
  },
  setBtn: {
    flex: 1,
    padding: 5,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 5
  },
  setBtnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  messageBtn: {
    flex: 1,
    padding: 5,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 5
  },
  messageBtnText: {
    textAlign: 'center'
  },
  user: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center'
  },
  userImg: {
    width: width / 6,
    height: width / 6,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: width / 6 / 2
  },
  nickname: {
    fontSize: 18,
    color: '#fff'
  },
  summary: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 1,
    marginTop: 4,
    borderRadius: 3,
    width: 12 * summary.length + summary.length
  },
  summaryText: {
    padding: 0,
    margin: 0,
    fontSize: 10,
    color: '#fff',
    textAlign: 'center'
  },
  headerRight: {
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.2)',
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 8,
    paddingLeft: 10,
    borderRadius: 12
  },
  headerRightText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'right'
  },
  content: {},
  favoriteWrap: {
    flexDirection: 'row',
    height: height/8 - 25,
    backgroundColor: '#fff'
  },
  favoriteWrapItem: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  favoriteWrapItemNumber: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: (height/8 - 40)/2
  },
  favoriteWrapItemText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: (height/8 - 40)/2
  },
  myOrdersWrapMore: {
    marginTop: 10,
    backgroundColor: '#fff',
    height: height/8 - 40,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#f4f4f4'
  },
  myOrdersTitle: {
    fontSize: 16,
    justifyContent:'center',
    paddingLeft: 10
  },
  seeMyOrder:{
    fontSize: 12,
    color: '#9e9e9e',
    paddingRight: 10
  },
  myOrdersWrap:{
    marginTop: 0.5,
    backgroundColor: '#fff',
    height: width/5,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#f4f4f4'
  },
  myOrdersWrapItem: {
    flex: 1,
  },
  myOrdersWrapItemIcon: {
    textAlign: 'center',
    lineHeight: width/5/4
  },
  myOrdersWrapItemText: {
    fontSize: width/5/6,
    textAlign: 'center',
    color: '#666666',
    lineHeight: width/5/4+6
  }
});

export default My;