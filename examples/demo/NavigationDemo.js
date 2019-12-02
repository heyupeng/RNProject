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
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import {} from './../extension/index'
import  color from './../common/Colors'


class Page1 extends React.Component {
  static navigationOptions = {
    title: 'Page1',
    headerTitle: 'Page1',
  };
  static navigationConfig ={ 
    headerMode: 'none'
  }
  
  componentDidMount() {
    console.log(Page1.name + ':' + JSON.stringify(this.routeState()))
  }
  render() {
    let params = this.props.navigation.state.params
    return (
      <View style={{flex: 1, backgroundColor: color.background}}
      onNavigationStateChange={(prevNav, newNav, action) => {
        console.group('Navigation Dispatchssss: ');
        console.log('Action: ', action);
        console.log('New State: ', newNav);
        console.log('Last State: ', prevNav);
        console.groupEnd();
        nav.routes = newNav.routes;
      
      }}
      >
        <SafeAreaView style={{}}>
          <View style={{ margin: 0, alignItems: 'center'}}>
            <Text style={styles.sectionTitle}>
            {params != null? params.content: ""} 
            </Text>
          </View>

          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}
                onPress={() => {
                  this.props.navigation.push(Page2.name, {content: "Push Here."})
                }}
              >Push Next</Text>
          </View>

          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}
                onPress={() => {
                  this.props.navigation.navigate(Page2.name, {content: "Navigate Here."})
                }}
              >Navigate Next</Text>
          </View>
          
        </SafeAreaView>
      </View>
    );
  }
}

class Page2 extends React.Component {
  static navigationOptions = {
    title: 'Page2',
  };
  
  componentDidMount() {
    let navigation = this.props.navigation;
    console.log("navigation: " + JSON.stringify(navigation));
    console.log(JSON.stringify(navigation.dangerouslyGetParent()));
  }
  render() {
    return (
      <View style={{flex: 1,}}
      onNavigationStateChange={(prevNav, newNav, action) => {
        console.group('Navigation Dispatchssss: ');
        console.log('Action: ', action);
        console.log('New State: ', newNav);
        console.log('Last State: ', prevNav);
        console.groupEnd();
        nav.routes = newNav.routes;
      
      }}
      >
        <View style={{ margin: 0, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.sectionTitle}>
              {this.props.navigation.state.params.content} 
            </Text>
          </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}
              onPress={() => {
                this.props.navigation.push(Page1.name, {content: "Push Here."})
              }}
            >Push Next</Text>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}
              onPress={() => {
                this.props.navigation.navigate(Page1.name, {content: "Navigate Here."})
              }}
            >Navigate Next</Text>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}
              onPress={() => {
                this.props.navigation.goBack()
              }}
            >Go back</Text>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}
              onPress={() => {
                this.props.navigation.pop(2)
              }}
            >Pop to previous 2 page</Text>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}
              onPress={() => {
                this.props.navigation.popToTop()
              }}
            >Pop to Top</Text>
        </View>

      </View>
    );
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
});

export default {
  Page1, 
  Page2,
}