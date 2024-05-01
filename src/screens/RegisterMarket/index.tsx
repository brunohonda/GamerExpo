import React, { useState } from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { MarketForm } from "../../shared/components/MarketForm";
import { Action } from "../../shared/interfaces/Action";
import { Market } from "../../shared/interfaces/Market";
import { RegisterMarketController } from "./controller";
import { RegisterMarketContainer } from "./styles";


export function RegisterMarketScreen({ navigation }: any) {
  const actions: Action[] = [
    { key: 'Cancel', title: 'Cancelar', onPress: () => navigation.goBack() },
    { key: 'Save', title: 'Salvar', onPress: () => {
      if(market) {
        RegisterMarketController.save(market).then(
          () => navigation.goBack()
        );
      }
    }},
  ];
  const [ market, setMarket ] = useState<Market>();
  
  return (
    <RegisterMarketContainer>
      <MarketForm onChange={ (market)=> setMarket(market) }></MarketForm>
      <ActionBar actions={ actions }></ActionBar>
    </RegisterMarketContainer>
  )
}