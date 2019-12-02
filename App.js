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
} from 'react-native';

React.Component.prototype.goBack = function(key = null) {
  if (!this.props.navigation) {return;}

  let navigation = this.props.navigation;
  let parent = navigation.dangerouslyGetParent();
  if (parent.index === 0) {
    console.warn('This is top route.');
    return;
  }
  navigation.goBack(key);
}

React.Component.prototype.navRouteState = function() {
  if(!this.props.navigation) return;
  let navigation = this.props.navigation;
  let parent = navigation.dangerouslyGetParent();
  console.log(JSON.stringify(parent.state));
 }

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class C1 extends React.Component {
  static navigationOptions = {
    title: 'C',
    headerTitle: 'C1',
  };
  static navigationConfig ={ 
    headerMode: 'none'
  }
  
  componentDidMount() {
    this.navRouteState();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}
      onNavigationStateChange={(prevNav, newNav, action) => {
        console.group('Navigation Dispatchssss: ');
        console.log('Action: ', action);
        console.log('New State: ', newNav);
        console.log('Last State: ', prevNav);
        console.groupEnd();
        nav.routes = newNav.routes;
      
      }}
      >
        <SafeAreaView style={{flex: 1, backgroundColor: 'yellow', paddingTop: 20}}>
          <Text style={{backgroundColor: 'red'}} onPress={()=>{
            this.goBack();
          }}
          >Go back</Text>
          <View style={{flex: 1, margin: 0, backgroundColor: 'green'}}>
            <Text style={{backgroundColor: 'red'}} onPress={()=>{
            this.goBack();
          }}
          >Go back</Text>
          </View>
          
        </SafeAreaView>
      </View>
    );
  }
}

class C2 extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  
  componentDidMount() {
    let navigation = this.props.navigation;
    console.log(navigation);
    console.log(JSON.stringify(navigation));
    console.log(navigation.state.routes);
    console.log(JSON.stringify(navigation.dangerouslyGetParent()));
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}
      onNavigationStateChange={(prevNav, newNav, action) => {
        console.group('Navigation Dispatchssss: ');
        console.log('Action: ', action);
        console.log('New State: ', newNav);
        console.log('Last State: ', prevNav);
        console.groupEnd();
        nav.routes = newNav.routes;
      
      }}
       />
    );
  }
}

class App extends React.Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: 'A much too long text for back button from B to A',

    headerTruncatedBackTitle: `A`,
    
  };

  componentDidMount() {
    this.navRouteState();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle} onPress={()=>{this.props.navigation.navigate('C1')}}>Demo</Text>
                <Text style={styles.sectionDescription}>
                  :
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}
// const App: () => React$Node = () => {
  
//   );
// };

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
    marginTop: 32,
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

/**
 * react-navigation v0.61 拆分分离
 * `npm add react-native-gesture-handler`;
 * `npm add react-navigation-stack # npm install --save react-navigation-stack`;
 * ios工程下 `pod install`;
 * 否则报错 `null is not an object (evaluating 'RNGestureHandlerModule.default.Direction') `
 * 链接 https://github.com/kmagiera/react-native-gesture-handler/issues/676
 * 
 * */ 

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const routeConfigs = {
  App: {screen: App},
  C1:  {screen: C1,
  },
  C2:  {screen: C2},
}

const stackConfig = {
  navigationOptions: {
    // header: null,
    gesturesEnabled: false,
  },
  headerMode: 'none',
}

const StackNavigator = createStackNavigator(
  {
    App: {screen: App},
    C1:  {screen: C1},
    C2:  {screen: C2},
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
    // headerMode: 'none',
  }
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
