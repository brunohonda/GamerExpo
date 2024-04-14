import React from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { Input } from "../../shared/components/Input";
import { Action } from "../../shared/interfaces/Action";
import { ListContainer, ListGamersContainer } from "./styles";

const actions: Action[] = [
  { key: 'Home', title: 'Início', onPress: () => {} },
  { key: 'Register', title: 'Cadastrar', onPress: () => {} },
];

export function ListGamersScreen() {
  return (
    <ListGamersContainer>
      <Input placeholder="Buscar Gamer"></Input>
      <ListContainer></ListContainer>
      <ActionBar actions={ actions }></ActionBar>
    </ListGamersContainer>
  )
}