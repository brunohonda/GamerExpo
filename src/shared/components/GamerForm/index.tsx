import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import * as yup from "yup";
import { Address } from "../../interfaces/Address";
import { Gamer } from "../../interfaces/Gamer";
import { Input } from "../Input";
import { InputWithButton } from "../InputWithButton";
import searchIcon from './../../../../assets/search.png';
import { GamerFormController } from "./controller";
import { Container } from "./styles";

export function GamerForm(props: { gamer?: Gamer }) {
  const [ postalCode, setPostalCode ] = useState<string>(props.gamer?.address.postalCode ?? '');
  const [ address, setAddress ] = useState<Address|null>(props.gamer?.address ? props.gamer?.address : null);
  const [ loadingAddress, setLoadingAddress ] = useState<boolean>(false);
  const { control, formState } = useForm<Gamer>({
    resolver: yupResolver(
      yup.object({
        firstName: yup.string()
          .required('Campo obrigatório')
          .min(3, 'Informe no mínimo 3 caracteres'),
        lastName: yup.string()
          .required('Campo obrigatório')
          .min(3, 'Informe no mínimo 3 caracteres'),
        email: yup.string()
          .required('Campo obrigatório')
          .email('Informe um e-mail válido'),
        address: yup.object({
          postalCode: yup.string()
            .required('Campo obrigatório')
            .length(8, 'Informe 8 digítos')
            .matches(/^\d{8}$/, 'Informe somente números'),
          street: yup.string()
            .required('Campo obrigatório')
            .min(3, 'Informe no mínimo 3 caracteres'),
          addressNumber: yup.string().matches(/^\d*$/, 'Informe somente números'),
          neighborhood: yup.string()
            .required('Campo obrigatório')
            .min(3, 'Informe no mínimo 3 caracteres'),
          city: yup.string()
            .required('Campo obrigatório')
            .min(3, 'Informe no mínimo 3 caracteres'),
          stateCode: yup.string()
            .required('Campo obrigatório')
            .min(3, 'Informe no mínimo 3 caracteres'),
        }),
      })
    )
  });
  const handlerSearchAddress = async () => {
    try {
      setLoadingAddress(true)
      const data = await GamerFormController.fetchAddress(postalCode);
      setAddress(data);
    } catch (error) {
      console.error('Error on search address by postal code', error);
    } finally {
      setLoadingAddress(false);
    }
  };
  
  return (
    <Container>
      <Input placeholder="Primeiro nome" control={ control } name="firstName" formState={ formState }>{ props.gamer?.firstName }</Input>
      <Input placeholder="Último nome" control={ control } name="lastName" formState={ formState }>{ props.gamer?.lastName }</Input>
      <Input placeholder="E-mail" keyboardType="email-address" control={ control } name="email" formState={ formState }>{ props.gamer?.email }</Input>
      <InputWithButton placeholder="CEP"
        keyboardType="numeric"
        maxLength={ 8 }
        iconSource={ searchIcon }
        control={ control }
        name="postalCode"
        formState={ formState }
        onChangeText={(text) => setPostalCode(text)}
        onClick={ handlerSearchAddress }
      >{ postalCode }</InputWithButton>
      { loadingAddress && <ActivityIndicator></ActivityIndicator> }
      <Input placeholder="Rua" control={ control } name="address.street" formState={ formState }>{ address?.street }</Input>
      <Input placeholder="Número" keyboardType="numeric" control={ control } name="address.addressNumber" formState={ formState }>{ address?.addressNumber }</Input>
      <Input placeholder="Bairro" control={ control } name="address.neighborhood" formState={ formState }>{ address?.neighborhood }</Input>
      <Input placeholder="Cidade" control={ control } name="address.city" formState={ formState }>{ address?.city }</Input>
      <Input placeholder="UF" control={ control } name="address.stateCode" formState={ formState }>{ address?.stateCode }</Input>
    </Container>
  )
}
