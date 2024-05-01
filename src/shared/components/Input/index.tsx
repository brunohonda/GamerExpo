import { Control, Controller, FormState } from "react-hook-form";
import { TextInputProps, View } from "react-native";
import { ErrorMessage } from "../ErrorMessage";
import { Input as Field, InputContainer } from "./styles";

export interface InputProps extends TextInputProps {
  control: Control<any, any>;
  name: string;
  formState: FormState<any>;
}

export function Input({ ...props }: Readonly<InputProps>) {
  function render(onChange: any) {
    return <View>
      <InputContainer>
        <Field {...props} onChangeText={ onChange } />
      </InputContainer>
      { props.formState.errors[props.name] && <ErrorMessage>{ props.formState.errors[props.name]?.message as string }</ErrorMessage> }
    </View>
  }

  return <Controller
      control={ props.control }
      name={ props.name }
      render={ ({ field: { onChange } }) => render(onChange) }
    />
}