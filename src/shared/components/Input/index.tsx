import { Control, Controller, FormState } from "react-hook-form";
import { TextInputProps } from "react-native";
import { ErrorMessage } from "../ErrorMessage";
import { Input as Field, InputContainer } from "./styles";

export interface InputProps extends TextInputProps {
  control: Control<any, any>;
  name: string;
  formState: FormState<any>;
}

export function Input({ ...props }: Readonly<InputProps>) {
  function render(onChange: any) {
    return <InputContainer>
        <Field {...props} onChange={ onChange } />
        { props.formState.errors[props.name] && <ErrorMessage>{ props.formState.errors[props.name]?.message as string }</ErrorMessage> }
      </InputContainer>
  }

  return <Controller
      control={ props.control }
      name={ props.name }
      render={ ({ field: { onChange } }) => render(onChange) }
    />
}