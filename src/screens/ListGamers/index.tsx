import React from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { Input } from "../../shared/components/Input";
import { ListContainer, ListGamersContainer } from "./styles";

export function ListGamersScreen() {
  return (
    <ListGamersContainer>
      <Input placeholder="Buscar Gamer"></Input>
      <ListContainer></ListContainer>
      <ActionBar></ActionBar>
    </ListGamersContainer>
  )
}