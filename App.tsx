import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Navigator } from './src/shared/components/Navigator';
import Theme from './src/shared/styles/Theme';


SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(
    () => {
      async function prepare() {
        try {
          await SplashScreen.hideAsync();
        } catch (error) {
          console.log('Error hiding splash screen', error);
        }
      }

      if (!fontsLoaded) {
        prepare();
      }
    },
    [
      fontsLoaded,
    ]
  )

  return (
    <ThemeProvider theme={Theme}>
      <Navigator></Navigator>
    </ThemeProvider>
  );
}
