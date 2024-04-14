import React from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { GamerListItem } from "../../shared/components/GamerListItem";
import { Input } from "../../shared/components/Input";
import { Action } from "../../shared/interfaces/Action";
import { Gamer } from "../../shared/interfaces/Gamer";
import { ListContainer, ListGamersContainer } from "./styles";

const actions: Action[] = [
  { key: 'Home', title: 'Início', onPress: () => {} },
  { key: 'Register', title: 'Cadastrar', onPress: () => {} },
];

const gamers: Gamer[] = [
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Atreet A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
];

export function ListGamersScreen() {
  return (
    <ListGamersContainer>
      <Input placeholder="Buscar Gamer"></Input>
      <ListContainer>
        { gamers.map(gamer => <GamerListItem gamer={ gamer }></GamerListItem>) }
      </ListContainer>
      <ActionBar actions={ actions }></ActionBar>
    </ListGamersContainer>
  )
}