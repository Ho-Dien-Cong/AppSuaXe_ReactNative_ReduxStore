/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ProFile from './screens/ProFiles.js';
import Login from "./screens/Login"
import Tabs from "./navigation/tab"
AppRegistry.registerComponent(appName, () => App);
