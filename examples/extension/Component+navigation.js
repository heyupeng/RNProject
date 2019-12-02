/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

React.Component.prototype.goBack = function(key = null) {
  if (!this.props.navigation) {return;}
  let navigation = this.props.navigation;
  let parent = navigation.dangerouslyGetParent();
  if (parent.index === 0) {
    return;
  }
  navigation.goBack(key);
}

React.Component.prototype.routeState = function() {
  if(!this.props.navigation) return null;
  let navigation = this.props.navigation;
  let parent = navigation.dangerouslyGetParent();
  return parent.state;
 }

React.Component.prototype.parentRoute = function() {
  let navigation = this.props.navigation;
  if (navigation == null || navigation.isFirstRouteInParent == true) {
    return null
  }
  let parent = navigation.dangerouslyGetParent()
  let index = parent.state.index
  let routes = parent.state.routes
  let route = routes[index-1]
  return route
}

 /* 
  LOG navigation.dangerouslyGetParent():

  {"actions":{},
    "router":{"childRouters":{"App":null,"C1":null,"C2":null}},
    "state":{
      "key":"StackRouterRoot",
      "isTransitioning":true,
      "index":2,
      "routes":[
        {"routeName":"App","key":"id-1701761969062-51"},
        {"routeName":"C1","key":"id-1701761969062-52"},
        {"routeName":"C2","key":"id-1701761969062-53"}
      ]
    },
    "_childrenNavigation":{
      "id-1701761969062-51":{"state":{"routeName":"App","key":"id-1701761969062-51"}, "actions":{}},
      "id-1701761969062-52":{"state":{"routeName":"C1","key":"id-1701761969062-52"}, "actions":{}},
      "id-1701761969062-53":{"state":{"routeName":"C2","key":"id-1701761969062-53"},"actions":{}}
    }
  }
  */
 
 /*
  StackNavigationProp => StackActions 'react-navigation.d.ts line 730'
 `console.log(navigation);`:

   {"actions": {
    "dismiss": [Function dismiss], 
    "goBack": [Function goBack], 
    "navigate": [Function navigate],
    "pop": [Function pop], "popToTop": [Function popToTop], 
    "push": [Function push], 
    "replace": [Function replace], "reset": [Function reset],
    "setParams": [Function setParams]}, 
    "addListener": [Function addListener], 
    "dangerouslyGetParent": [Function anonymous], 
    "dismiss": [Function anonymous], 
    "dispatch": [Function anonymous], 
    "emit": [Function emit], 
    "getChildNavigation": [Function getChildNavigation], 
    "getParam": [Function anonymous],
    "getScreenProps": [Function anonymous], 
    "goBack": [Function anonymous], 
    "isFirstRouteInParent": [Function isFirstRouteInParent], 
    "isFocused": [Function isFocused], 
    "navigate": [Function anonymous], 
    "pop": [Function anonymous], "popToTop": [Function anonymous], 
    "push": [Function anonymous], 
    "replace": [Function anonymous], "reset": [Function anonymous], 
    "router": undefined, 
    "setParams": [Function anonymous], 
    "state": {"key": "id-1701761969062-53", "params": undefined, "routeName": "C2"}
  }
 */