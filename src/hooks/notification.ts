import {useCallback, useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee, {EventType} from '@notifee/react-native';
import {clasicNotification} from '../utils/localNotification';
import {navigate} from '../utils/navigation';

export const useNotification = () => {
  const requestPermision = useCallback(async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      await messaging().registerDeviceForRemoteMessages();
      const tkn = await messaging().getToken();
      console.log({tkn});
    }
  }, []);

  const onMessage = useCallback((message: any) => {
    console.log({message});
    clasicNotification(message.data);
    // pushFCM(message.data);
  }, []);

  useEffect(() => {
    requestPermision();
  }, []);
  // listen on message
  useEffect(() => {
    const unsubscribe = messaging().onMessage(onMessage);
    return unsubscribe;
  }, []);
  // listen notifee action
  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(({type, detail}) => {
      const {notification} = detail;
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
        notifee.cancelNotification(notification?.id ?? '');
      }
    });
    return unsubscribe;
  }, []);
};
