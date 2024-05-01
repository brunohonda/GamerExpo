import React, { useState } from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { MarketForm } from "../../shared/components/MarketForm";
import { Action } from "../../shared/interfaces/Action";
import { Market } from "../../shared/interfaces/Market";
import { RegisterMarketController } from "./controller";
import { RegisterMarketContainer } from "./styles";


export function RegisterMarketScreen({ navigation }: any) {
  const [ market, setMarket ] = useState<Market>();
  let actions: Action[] = [
    { key: 'Cancel', title: 'Cancelar', onPress: () => navigation.goBack() },
    { key: 'Save', title: 'Salvar', onPress: () => {
      if(market) {
        RegisterMarketController.save(market).then(
          () => navigation.goBack()
        );
      }
    }},
  ];

  function setActionDisabledState(key: string, disabled: boolean): void {
    actions = actions.map(
      action => ({
        ...action,
        disabled: action.key === key ? disabled : action.disabled,
      })
    );
  }
  
  return (
    <RegisterMarketContainer>
      <MarketForm onChange={ (market)=> setMarket(market) } onValidityChange={ (isValid) => setActionDisabledState('Save', !isValid) }></MarketForm>
      <ActionBar actions={ actions }></ActionBar>
    </RegisterMarketContainer>
  )
}