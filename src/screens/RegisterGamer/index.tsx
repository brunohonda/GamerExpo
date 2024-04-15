import React, { useState } from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { GamerForm } from "../../shared/components/GamerForm";
import { Action } from "../../shared/interfaces/Action";
import { Gamer } from "../../shared/interfaces/Gamer";
import { RegisterGamerController } from "./controller";
import { RegisterGamerContainer } from "./styles";


export function RegisterGamerScreen({ navigation }: any) {
  const actions: Action[] = [
    { key: 'Cancel', title: 'Cancelar', onPress: () => navigation.goBack() },
    { key: 'Save', title: 'Salvar', onPress: () => {
      if(gamer) {
        console.log('SAVE', gamer);
        RegisterGamerController.save(gamer);
      }
    }},
  ];
  const [ gamer, setGamer ] = useState<Gamer>();
  
  return (
    <RegisterGamerContainer>
      <GamerForm onChange={ (gamer)=> setGamer(gamer) }></GamerForm>
      <ActionBar actions={ actions }></ActionBar>
    </RegisterGamerContainer>
  )
}