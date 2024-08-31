import { AppRegistry } from 'react-native';
import App from './App'; // Ensure this path is correct
import { name as appName } from './app.json';

// Register the app
AppRegistry.registerComponent(appName, () => App);

