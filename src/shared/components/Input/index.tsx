import { TextInputProps } from "react-native";
import { Input as Field, InputContainer } from "./styles";

export function Input({ ...props }: Readonly<TextInputProps>) {
  return <InputContainer>
    <Field {...props} />
  </InputContainer>
}