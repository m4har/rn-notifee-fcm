import {useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import NotificationScreen from './screens/Notification';

import {useNotification} from './hooks/notification';
import {navigationRef} from './utils/navigation';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  useNotification();
  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <Navigator>
          <Screen name="home" component={HomeScreen} />
          <Screen name="notification" component={NotificationScreen} />
        </Navigator>
      </NavigationContainer>
    </View>
  );
}
