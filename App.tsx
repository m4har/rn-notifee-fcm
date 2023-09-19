import {TamaguiProvider} from 'tamagui';

import config from './tamagui.config';
import MainApp from './src/App';
export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <MainApp />
    </TamaguiProvider>
  );
}
