/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import Kernel from './src';
import { name as appName } from './app.json';

// LogBox.ignoreLogs = true
AppRegistry.registerComponent(appName, () => Kernel);
