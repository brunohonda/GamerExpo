import { Control, Controller, FormState } from "react-hook-form";
import { GestureResponderEvent, Image, ImageSourcePropType, TextInputProps } from "react-native";
import { ErrorMessage } from "../ErrorMessage";
import { Button, Input as Field, InputContainer } from "./styles";

interface InputWithButtonProps extends TextInputProps {
  iconSource: ImageSourcePropType;
  control: Control<any, any>;
  name: string;
  formState: FormState<any>;
  onClick?: ((event: GestureResponderEvent) => void);
}

export function InputWithButton({ ...props }: Readonly<InputWithButtonProps>) {
  function render(onChange: any) {
    return <InputContainer>
    <Field {...props} onChangeText={ onChange }></Field>
    <Button onPress={ props.onClick }>
      <Image source={ props.iconSource } />
    </Button>
    { props.formState.errors[props.name] && <ErrorMessage>{ props.formState.errors[props.name]?.message as string }</ErrorMessage> }
  </InputContainer>
  }

  return <Controller
      control={ props.control }
      name={ props.name }
      render={ ({ field: { onChange } }) => render(onChange) }
    />
}