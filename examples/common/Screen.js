/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Dimensions, PixelRatio, Platform}  from "react-native"
// import { min, max } from "react-native-reanimated";

const window = Dimensions.get("window")
const screenRatio = Math.min(window.width, window.height) / Math.max(window.width, window.height)

const pixelUnit = 1 / PixelRatio.get()

/** iOS 短屏手机屏幕比 */
const iOSSrceenRatio = 0.562;

/** 刘海屏 */
const iPhoneX = Platform.OS == 'ios' && screenRatio < iOSSrceenRatio

export default {
    ...window,
    
    pixelUnit,
    iPhoneX,
}