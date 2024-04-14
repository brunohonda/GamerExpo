import React from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { ListContainer, ListGamersContainer, SearchContainer, SearchInput } from "./styles";

export function ListGamersScreen() {
  return (
    <ListGamersContainer>
      <SearchContainer>
        <SearchInput placeholder="Buscar Gamer"></SearchInput>
      </SearchContainer>
      <ListContainer></ListContainer>
      <ActionBar></ActionBar>
    </ListGamersContainer>
  )
}