import React from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { GamerForm } from "../../shared/components/GamerForm";
import { Action } from "../../shared/interfaces/Action";
import { RegisterGamerContainer } from "./styles";


export function RegisterGamerScreen({ navigation }: any) {
  const actions: Action[] = [
    { key: 'Cancel', title: 'Cancelar', onPress: () => navigation.goBack() },
    { key: 'Save', title: 'Salvar', onPress: () => {} },
  ];
  
  return (
    <RegisterGamerContainer>
      <GamerForm></GamerForm>
      <ActionBar actions={ actions }></ActionBar>
    </RegisterGamerContainer>
  )
}