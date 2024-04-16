import { NavigationContainerRef, Route } from "@react-navigation/native";
import React, { useState } from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { GamerForm } from "../../shared/components/GamerForm";
import { Action } from "../../shared/interfaces/Action";
import { Gamer } from "../../shared/interfaces/Gamer";
import { UpdateGamerController } from "./controller";
import { UpdateGamerContainer } from "./styles";

interface UpdateGamerScreenProps {
  navigation: NavigationContainerRef<{}>;
  route: Route<'Update', { gamer: string }>;
}

export function UpdateGamerScreen(props: UpdateGamerScreenProps) {
  const actions: Action[] = [
    { key: 'Cancel', title: 'Cancelar', onPress: () => props.navigation.goBack() },
    { key: 'Save', title: 'Salvar', onPress: () => {
      if(gamer) {
        UpdateGamerController.save(gamer).then(
          () => props.navigation.goBack()
        );
      }
    } },
  ];
  const [ gamer, setGamer ] = useState<Gamer>(JSON.parse(props.route.params.gamer));
  
  return (
    <UpdateGamerContainer>
      <GamerForm gamer={ gamer } onChange={ (gamer)=> setGamer(gamer) }></GamerForm>
      <ActionBar actions={ actions }></ActionBar>
    </UpdateGamerContainer>
  )
}