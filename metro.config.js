/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  server: {
    port: 8087,
  }
};

/**
 * 端口冲突
 * Error: listen EADDRINUSE: address already in use :::8081
    at Server.setupListenHandle [as _listen2] (net.js:1226:14)
    at listenInCluster (net.js:1274:12)
    at Server.listen (net.js:1362:7)
    at /Users/peng/Desktop/RNProject/node_modules/metro/src/index.js:257:20
    at new Promise (<anonymous>)
    at Object.<anonymous> (/Users/peng/Desktop/RNProject/node_modules/metro/src/index.js:256:14)
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/Users/peng/Desktop/RNProject/node_modules/metro/src/index.js:46:24)
    at _next (/Users/peng/Desktop/RNProject/node_modules/metro/src/index.js:66:9)
 */

/**
 * 
 *  restart `/node_modules/metro/src/commands/serve.js`
 *    => `loadConfig()`
 *    => `runServer()`
 *  
 *  start
 *  `runServer.js` (`react-native/local-cli/server` => `/node_modules/react-native/node_modules/@react-native-community/cli/build/commands/server`)
 *  `.runServer()`
 *    => `loadMetroConfig()` (`/node_modules/react-native/node_modules/@react-native-community/cli/build/tools/loadMetroConfig`) 
 *       getDefaultConfig(), `process.env.RCT_METRO_PORT` 未赋值，`server.port`默认8081.
 *       => `loadConfig()` (`/node_modules/metro-config/src/loadConfig`);
 *          => `loadMetroConfigFromDisk()`
 *             (加载项目下["metro.config.js","metro.config.json","package.json","rn-cli.config.js"]文件配置, 合并配置信息)
 *             defaultConfig (`/node_modules/metro-config/src/default/`)
 *             defaultConfigOverrides (`loadMetroConfig.getDefaultConfig`)
 *             configModule (`/metro.config.js`)
 *             => `mergeConfig(defaultConfig, defaultConfigOverrides, configModule)`
 *    => `metro.runServer()` (`/node_modules/metro/src/`) 
 * 
 *        
 * 修改服务器配置（端口）
 *  `node_modules/@react-native-community/cli-platform-ios/build/commands/runIOS/index.js` 可查看iOS平台下一些配置信息
 * 
 *  修改`port`默认值
 *  yarn: `metro-inspector-porxy` 下 `/src/cli.js`
 * 
 *  or `mertro.config.js`下设置。数据类型参考`/metro-config/index`
 * 
 * 注意：iOS工程下 `RCT_METRO_PORT` 一并修改 。
 */ 
