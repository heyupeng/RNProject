/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Switch,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

import {} from './../extension/index'
import { Colors } from './../common/index'

const data = [
  1,2,3,4,5,6,7,8,9,10
];

class FlatListDemo extends React.Component {
  // static navigationOptions = {
  //   header: null,
  //   headerBackTitle: 'A much too long text for back button from B to A',

  //   headerTruncatedBackTitle: `A`,
  //   headerMode: 'none'
  // }
  horizontal = false

  constructor(props) {  
    super(props)
    this.state = { 
      horizontal: 0,
      data: data 
    };
  }

  componentDidMount() {
    console.log(FlatListDemo.name + ':' + JSON.stringify(this.routeState()))
  }

  render() {
    return (
      <View style={{flex: 1}} >
        <StatusBar barStyle="dark-content" />

        <View style={styles.sectionContainer} >
        <SwitchRowCell title={"Horizontal"} 
          value={this.horizontal}
          onValueChange={ this.changeListDirection }
        />
        </View>

        <FlatList style={{flex:1}}
          horizontal={this.horizontal}
          data={this.state.data}
          keyExtractor={(itme, index) => { `flag-key-${index}` }}
          renderItem={this.renderItem}

          ListHeaderComponent={ this.listHeaderComponent }
          ListFooterComponent={ this.listFooterComponent }
          ItemSeparatorComponent={ this.itemSeparatorComponent }
        >
        </FlatList>
      </View>
    )
  }

  changeListDirection = (value) => {
    this.horizontal = value
    this.setState({})
  }

  renderItem = (itemInfo) => {
    let item = itemInfo.item
    if (this.horizontal == 1) {
      return (
        <View style={[styles.cellContainer_h, {backgroundColor: Colors.white, alignContent: 'center'}]}>
        <Text style={styles.listHeaderTitle}> {JSON.stringify(item)}
        </Text>
      </View>
      )
    }
    return (
      <TouchableOpacity 
        style={[styles.cellContainer_v, {backgroundColor: Colors.white, justifyContent: 'center' }]}
        onPress={()=>{alert(item)}}
      >
        <View>
          <Text style={styles.sectionTitle}> {JSON.stringify(item)}
          </Text>

          <View style={{position: 'absolute', right: 0}}>
            <Text>{">"}</Text>
          </View>
        </View>
       
      </TouchableOpacity>
    )
  }

  listHeaderComponent = () => {
    const containerStyle = [styles.listHeaderContainer, 
      {paddingVertical: 0, height: 30, justifyContent: "center"}]
    return (
      <View style={containerStyle}>
        <Text style={styles.listHeaderTitle} >This is a header.</Text>        
      </View>
    )
  }
  listFooterComponent = () => {
    const containerStyle = [styles.listHeaderContainer, 
      {paddingVertical: 0, height: 30, justifyContent: "center"}]
    return (
      <View style={containerStyle}>
        <Text style={styles.listHeaderTitle} >This is a footer.</Text>        
      </View>
    )
  }

  itemSeparatorComponent = (info) => {
    return (
      <View style={{flex: 1}}>
        <Text>    </Text>
      </View>
    )
  }
}

class SwitchRowCell extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.style,
    value: PropTypes.bool,
    onValueChange: PropTypes.func,
  }
  static defaultProps = {
    value: 0,
  }

  render() {
    const {style, title, titleStyle, value, onValueChange} = this.props
    return (
      <View style={[{flexDirection: 'row', justifyContent: "center"}, style]}>
        <Text style={[styles.sectionTitle, titleStyle]}>{title}</Text>
        <View style={{flex: 1}}></View>
        <Switch value={value} onValueChange={onValueChange}></Switch>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  cellContainer_h: {
    // marginTop: 16,
    // marginLeft: 16,
    paddingHorizontal: 24
  },
  cellContainer_v: {
    // marginTop: 16,
    paddingHorizontal: 24,
    height: 50,
  },
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  listHeaderContainer: {
    paddingHorizontal: 24,
  },
  listHeaderTitle: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '600',
    justifyContent: 'center',
    textAlignVertical: 'center'
  },
});

export default FlatListDemo