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

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {} from './extension/index'
// import  color from './common/Colors'


class App extends React.Component {
  // static navigationOptions = {
  //   header: null,
  //   headerBackTitle: 'A much too long text for back button from B to A',

  //   headerTruncatedBackTitle: `A`,
  //   headerMode: 'none'
  // }
  
  static navigationOptions = ({ navigation }) => {
    let params = navigation.state.params;
    let visible = params && params.headerVisible ? undefined: null
    return ({
      header: visible,
    })
  }

  headerVisible = false;

  componentDidMount() {
    console.log(App.name + ':' + JSON.stringify(this.routeState()))
  }
  
  render() {
    return (
      <View style={{flex: 1}} navigationOptions={(navigation) => {
        
      }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal != null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle} onPress={()=>{
                  this.headerVisible = !this.headerVisible
                  this.props.navigation.setParams({headerVisible: this.headerVisible})
                }}
                >Show Top Bar</Text>
                <Text style={styles.sectionDescription}>
                  Touch to change the top bar state.
                </Text>
              </View>
              {
                demos.map((element) => 
                  this.renderItem(element.rountName, element.title, element.description)   
                )
              }
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }

  renderItem(rountName, title, description, content = App.name) {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle} 
        onPress={()=>{ 
          this.props.navigation.navigate(rountName, {content: content})
        }}
          >{title}</Text>
        <Text style={styles.sectionDescription}>
          {description}
        </Text>
      </View>
    )
  }
}
// const App: () => React$Node = () => {
  
//   );
// };

// {rountName: "", title: "", description: ""}
const demos = [
  {rountName: "TouchabbleDemo", title: "Touchabble", description: "Touchabble components demo" },
  {rountName: "Page1", title: "Navigation", description: "A sample navigation demo."},
  {rountName: "FlatListDemo", title: "FlatListDemo", description: "FlatListDemo"},
]

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


import NavigationDemo from './demo/NavigationDemo'
import FlatListDemo from './demo/FlatListDemo'

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
    Page1:  {screen: NavigationDemo.Page1},
    Page2:  {screen: NavigationDemo.Page2},

    FlatListDemo: {screen: FlatListDemo}
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

/*  */
class Container extends StackNavigator{
  static navigationOptions = (navigation) => {
    return {
      header: null
    }
  }
}

export default Container;
