import { Image, ImageSourcePropType, TextInputProps } from "react-native";
import { Button, Input as Field, InputContainer } from "./styles";

interface InputWithButtonProps extends TextInputProps {
  iconSource: ImageSourcePropType
}

export function InputWithButton({ ...props }: Readonly<InputWithButtonProps>) {
  return <InputContainer>
    <Field {...props} />
    <Button>
      <Image source={ props.iconSource }></Image>
    </Button>
  </InputContainer>
}