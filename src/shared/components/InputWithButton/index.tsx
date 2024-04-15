import { GestureResponderEvent, Image, ImageSourcePropType, TextInputProps } from "react-native";
import { Button, Input as Field, InputContainer } from "./styles";

interface InputWithButtonProps extends TextInputProps {
  iconSource: ImageSourcePropType;
  onClick?: ((event: GestureResponderEvent) => void);
}

export function InputWithButton({ ...props }: Readonly<InputWithButtonProps>) {
  return <InputContainer>
    <Field {...props}></Field>
    <Button onPress={ props.onClick }>
      <Image source={ props.iconSource } />
    </Button>
  </InputContainer>
}