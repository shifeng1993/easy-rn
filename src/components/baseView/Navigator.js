import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
import Orientation from 'react-native-orientation';
const {height, width} = Dimensions.get('window');

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: '',
    titleColor: '#000',
    renderLeft: null,
    renderMiddle: null,
    renderRight: null
  };

  render() {
    const renderLeft = this._renderLeft(this.props.renderLeft)
    const renderRight = this._renderRight(this.props.renderRight)
    let renderMiddle;
    if (this.props.renderMiddle) {
      renderMiddle = this._renderMiddle(this.props.renderMiddle)
    } else {
      renderMiddle = this._renderTitle(this.props.title)
    }
    return (
      <View
        style={[
        styles.header, {
          backgroundColor: this.props.backgroundColor
        }
      ]}>
        {renderLeft}
        <View style={styles.headerMiddle}>
          {renderMiddle}
        </View>
        {renderRight}
      </View>
    );
  }
  _renderLeft = (props) => {
    if (props) {
      return (
        <TouchableHighlight style={styles.headerLeft} underlayColor={'rgba(0,0,0,0.1)'}>
          {React.cloneElement(props())}
        </TouchableHighlight>
      )
    } else {
      return null;
    }
  }
  _renderRight = (props) => {
    if (props) {
      return (
        <View style={styles.headerRight}>
          {React.cloneElement(props())}
        </View>
      )
    } else {
      return null;
    }
  }
  _renderMiddle = (props) => {
    if (props) {
      return React.cloneElement(props());
    } else {
      return null;
    }
  }
  _renderTitle = () => {
    if (this.props.title && this.props.titleColor) {
      return (
        <Text
          style={{
          color: this.props.titleColor,
          textAlign: 'left',
          fontSize: 18
        }}>{this.props.title}</Text>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    position: 'relative',
    height: (Orientation.getInitialOrientation() === 'PORTRAIT')
      ? (width / 8)
      : (((Orientation.getInitialOrientation() === 'PORTRAITUPSIDEDOWN')
        ? (width / 8)
        : (height / 8))),
    alignItems: 'center'
  },
  headerLeft: {
    flex: 1
  },
  headerMiddle: {
    flex: 8,
    paddingLeft: 5,
    paddingRight: 5
  },
  headerRight: {
    flex: 1
  }
});
