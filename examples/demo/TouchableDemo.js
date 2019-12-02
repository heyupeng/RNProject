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
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import PropTypes from 'prop-types';

import {} from '../extension/index'
import { Colors } from '../common/index'

const data = [
  1,2,3,4,5,6,7,8,9,10
];

export class TouchableDemo extends React.Component {
  constructor(props) {  
    super(props)
    this.state = { 

    };
  }

  componentDidMount() {
    console.log(TouchableDemo.name + ':' + JSON.stringify(this.routeState()))
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

        <ScrollView style={styles.body}>
          <HighlightButton title={"HighlightButton"} 
            onPress={()=>{ alert("HighlightButton")} }
          >
          </HighlightButton>

          {/*TouchableHighlight */}
          <View style={ {margin: 10, backgroundColor: 'green'} }>
          <TouchableHighlight style={container}
            onPress={ ()=> {alert("TouchableHighlight")} }
            underlayColor={'yellow'}
          >
          <View>
            <Text style={styles.titleStyle}> TouchableHighlight
            </Text>
          </View>
        </TouchableHighlight>
        </View>

        <View style={ {margin: 10, backgroundColor: 'green'} }>
          <TouchableWithoutFeedback style={container}
            onPress={ ()=> {alert("TouchableWithoutFeedback")} }
            underlayColor={'yellow'}
          >
          <View>
            <Text style={styles.titleStyle}> TouchableWithoutFeedback
            </Text>
          </View>
        </TouchableWithoutFeedback>
        </View>

        <View style={ {margin: 10, backgroundColor: 'green'} }>
          <TouchableNativeFeedback style={container}
            onPress={ ()=> {alert("TouchableNativeFeedback")} }
          >
          <View>
            <Text style={styles.titleStyle}> TouchableWithoutFeedback
            </Text>
          </View>
        </TouchableNativeFeedback>
        </View>

        </ScrollView>
      </View>
    )
  }
}

class HighlightButton extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.style,
    onPress: PropTypes.func,
  }
  static defaultProps = {
    value: 0,
  }

  render() {
    const {style, title, titleStyle, value, onPress} = this.props
    const container = [{justifyContent: "center"}, style]
    return (
      <TouchableOpacity style={container}
        onPress={onPress}
        >
        <View>
        {this.props.child ??
          <Text style={[styles.title, titleStyle]}> {title}
          </Text>
          }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  title: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '600',
  },
});