import {useState} from 'react';
import {View} from 'react-native';
import {
  Text,
  SizableText,
  Paragraph,
  XStack,
  Button,
  YStack,
  Input,
} from 'tamagui';

import {clasicNotification} from '../utils/localNotification';

export default function Home() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  return (
    <YStack alignItems="center" flex={1}>
      <Input
        size={'$3'}
        placeholder={'title'}
        width={200}
        margin="$2"
        onChangeText={setTitle}
      />
      <Input
        size={'$3'}
        placeholder={'message'}
        width={200}
        margin="$1"
        onChangeText={setMessage}
      />
      <Button
        size={'$3'}
        theme="active"
        onPress={() => clasicNotification({title, message, screen: '1'})}>
        Trigger
      </Button>
    </YStack>
  );
}
