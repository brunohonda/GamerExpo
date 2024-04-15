import { GestureResponderEvent } from "react-native";

export interface Action {
  key: string
  title: string;
  disabled?: boolean;
  onPress: ((event: GestureResponderEvent) => void)
}
