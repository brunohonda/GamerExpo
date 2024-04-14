import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Text } from 'react-native';
import { } from 'styled-components';
import { ThemeProvider } from 'styled-components/native';
import { Navigator } from './src/shared/components/Navigator';
import Theme from './src/shared/styles/Theme';


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <ThemeProvider theme={Theme}>
      <Navigator></Navigator>
    </ThemeProvider>
  );
}
