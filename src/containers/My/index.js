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
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBar from '../../components/baseView/StatusBar'
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
                name="ios-color-wand"
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
                <Icon name="ios-eye" size={12} color="#fff"/>
                <Text>
                  淘气值</Text>
                <Text>
                  1060
                </Text>
                <Icon name="ios-arrow-forward" size={12} color="#fff"/>
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.favoriteWrap}>
            <TouchableHighlight
              style={styles.favoriteWrapItem}
              underlayColor={'#f4f4f4'}
              onPress={() => alert('收藏夹')}>
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
  }
});

export default My;