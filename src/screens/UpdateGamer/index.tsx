import { NavigationContainerRef, Route } from "@react-navigation/native";
import React from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { GamerForm } from "../../shared/components/GamerForm";
import { Action } from "../../shared/interfaces/Action";
import { RegisterGamerContainer } from "./styles";

interface UpdateGamerScreenProps {
  navigation: NavigationContainerRef<{}>;
  route: Route<'Update', { gamer: string }>;
}

export function UpdateGamerScreen(props: UpdateGamerScreenProps) {
  const actions: Action[] = [
    { key: 'Cancel', title: 'Cancelar', onPress: () => props.navigation.goBack() },
    { key: 'Save', title: 'Salvar', onPress: () => {} },
  ];
  
  return (
    <RegisterGamerContainer>
      <GamerForm gamer={ JSON.parse(props.route.params.gamer) }></GamerForm>
      <ActionBar actions={ actions }></ActionBar>
    </RegisterGamerContainer>
  )
}