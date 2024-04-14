import { GestureResponderEvent } from "react-native";

export interface Action {
  key: string
  title: string;
  onPress: ((event: GestureResponderEvent) => void)
}
