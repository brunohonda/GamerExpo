import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ActionBar } from "../../shared/components/ActionBar";
import { GamerListItem } from "../../shared/components/GamerListItem";
import { InputWithButton } from "../../shared/components/InputWithButton";
import { Action } from "../../shared/interfaces/Action";
import { Gamer } from "../../shared/interfaces/Gamer";
import searchIcon from './../../../assets/search.png';
import { ListContainer, ListGamersContainer, SearchContainer } from "./styles";

const gamers: Gamer[] = [
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Street A', addressNumber: '', city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'B', lastName: 'C', email: 'b@c.com', address: { postalCode: '', street: 'Street B', addressNumber: '', city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
];

export function ListGamersScreen({ navigation }: any) {
  const actions: Action[] = [
    { key: 'Register', title: 'Cadastrar', onPress: () => navigation.navigate('Register') },
  ];
  const { control, formState } = useForm<{ search: string }>({
    resolver: yupResolver(
      yup.object({
        search: yup.string().required()
      })
    )
  });

  return (
    <ListGamersContainer>
      <SearchContainer>
        <InputWithButton
          placeholder="Buscar Gamer"
          iconSource={ searchIcon }
          control={ control }
          name="search"
          formState={ formState }
        ></InputWithButton>
      </SearchContainer>
      <ListContainer>
        { gamers.map(gamer => <GamerListItem key={ gamer.email } gamer={ gamer } navigation={ navigation }></GamerListItem>) }
      </ListContainer>
      <ActionBar actions={ actions }></ActionBar>
    </ListGamersContainer>
  )
}