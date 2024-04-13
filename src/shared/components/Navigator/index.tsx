import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../../../../App.routes";
import { Header } from "../Header";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: Header, animation: 'slide_from_right', statusBarTranslucent: true }}>
        { routes.map(route => <Stack.Screen key={ route.name } name={ route.name } component={ route.component } />) }
      </Stack.Navigator>
    </NavigationContainer>
  )
}