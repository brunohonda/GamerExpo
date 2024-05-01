import { Control, Controller, FieldErrors, FormState } from "react-hook-form";
import { TextInputProps, View } from "react-native";
import { ErrorMessage } from "../ErrorMessage";
import { Input as Field, InputContainer } from "./styles";

export interface InputProps extends TextInputProps {
  control: Control<any, any>;
  name: string;
  formState: FormState<any>;
}

export function Input({ ...props }: Readonly<InputProps>) {
  function getError(errors: FieldErrors, controlName: string) {
    const path = controlName.split('.');
    
    if(!Object.hasOwn(errors, path[0])) {
      return undefined;
    }

    if (path.length === 1) {
      return errors[path[0]];
    }
    
    return getError(errors[path[0]] as FieldErrors, path.slice(1).join('.'));
  }

  function render(onChange: any) {
    return <View>
      <InputContainer>
        <Field {...props} onChangeText={ onChange } />
      </InputContainer>
      { getError(props.formState.errors, props.name) && <ErrorMessage>{ getError(props.formState.errors, props.name)?.message as string }</ErrorMessage> }
    </View>
  }

  return <Controller
      control={ props.control }
      name={ props.name }
      render={ ({ field: { onChange } }) => render(onChange) }
    />
}