/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import notifee, {EventType} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import {clasicNotification} from './src/utils/localNotification';
import {name as appName} from './app.json';
import {navigate} from './src/utils/navigation';

notifee.onBackgroundEvent(async ({type, detail}) => {
  const {notification, pressAction} = detail;
  // Check if the user pressed the "Mark as read" action
  if (type === EventType.PRESS) {
    setTimeout(() => {
      console.log('PRESS ', detail?.notification?.data?.screen);
      switch (detail?.notification?.data?.screen) {
        case '1':
          navigate('notification');
          break;

        default:
          break;
      }
    }, 500);
    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});

messaging().setBackgroundMessageHandler(async message => {
  clasicNotification(message.data);
});

// Check if app was launched in the background and conditionally render null if so
function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  // Render the app component on foreground launch
  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
