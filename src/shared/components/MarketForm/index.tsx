import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import * as yup from "yup";
import { Address } from "../../interfaces/Address";
import { Market } from "../../interfaces/Market";
import { Input } from "../Input";
import { InputWithButton } from "../InputWithButton";
import searchIcon from './../../../../assets/search.png';
import { MarketFormController } from "./controller";
import { Container } from "./styles";

interface MarketFormProps {
  market?: Market;
  onChange?: (market: Market) => void;
}

export function MarketForm(props: MarketFormProps) {
  const [ postalCode, setPostalCode ] = useState<string>(props.market?.address.postalCode ?? '');
  const [ address, setAddress ] = useState<Address|null>(props.market?.address ? props.market?.address : null);
  const [ loadingAddress, setLoadingAddress ] = useState<boolean>(false);
  const { control, formState, getValues } = useForm<Market>({
    mode: "all",
    resolver: yupResolver(
      yup.object({
        name: yup.string()
          .required('Campo obrigatório')
          .min(3, 'Informe no mínimo 3 caracteres'),
        phone: yup.string()
          .required('Campo obrigatório')
          .matches(/\d{10,11}^$/, 'Informe um telefone válido'),
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
    ),
    defaultValues: {
      ...props.market,
    }
  });
  const handlerSearchAddress = async () => {
    try {
      setLoadingAddress(true)
      const data = await MarketFormController.fetchAddress(postalCode);
      setAddress(data);
    } catch (error) {
      console.error('Error on search address by postal code', error);
    } finally {
      setLoadingAddress(false);
    }
  };

  function handlerChange() {
    setTimeout(() => (props.onChange ?? (() => {}))(getValues()), 1);
  }
  
  return (
    <Container>
      <Input placeholder="Nome" control={ control } name="name" formState={ formState } onChange={ handlerChange }>{ props.market?.name }</Input>
      <Input placeholder="Telefone" keyboardType="phone-pad" control={ control } name="phone" formState={ formState } onChange={ handlerChange }>{ props.market?.phone }</Input>
      <InputWithButton placeholder="CEP"
        keyboardType="numeric"
        maxLength={ 8 }
        iconSource={ searchIcon }
        control={ control }
        name="postalCode"
        formState={ formState }
        onChangeText={(text) => setPostalCode(text)}
        onClick={ handlerSearchAddress }
        onChange={ handlerChange }
      >{ postalCode }</InputWithButton>
      { loadingAddress && <ActivityIndicator></ActivityIndicator> }
      <Input placeholder="Rua" control={ control } name="address.street" formState={ formState } onChange={ handlerChange }>{ address?.street }</Input>
      <Input placeholder="Número" keyboardType="numeric" control={ control } name="address.addressNumber" formState={ formState } onChange={ handlerChange }>{ address?.addressNumber }</Input>
      <Input placeholder="Bairro" control={ control } name="address.neighborhood" formState={ formState } onChange={ handlerChange }>{ address?.neighborhood }</Input>
      <Input placeholder="Cidade" control={ control } name="address.city" formState={ formState } onChange={ handlerChange }>{ address?.city }</Input>
      <Input placeholder="UF" control={ control } name="address.stateCode" formState={ formState } onChange={ handlerChange }>{ address?.stateCode }</Input>
    </Container>
  )
}
