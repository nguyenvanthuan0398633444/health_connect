/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigation from './src/app/services/navigation';
import Login from './src/app/screens/login';

AppRegistry.registerComponent(appName, () => Navigation);
