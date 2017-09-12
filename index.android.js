/* ******* ios主入口 *******/
// 引入启动组件对象
import { AppRegistry } from 'react-native';
// 引入源文件主入口
import App from './app.js'
// 注册，实例化启动对象
AppRegistry.registerComponent('easyRn', () => App);