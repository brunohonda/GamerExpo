import { NavigationContainerRef, Route } from "@react-navigation/native";
import React, { useState } from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { MarketForm } from "../../shared/components/MarketForm";
import { Action } from "../../shared/interfaces/Action";
import { Market } from "../../shared/interfaces/Market";
import { UpdateMarketController } from "./controller";
import { UpdateMarketContainer } from "./styles";

interface UpdateMarketScreenProps {
  navigation: NavigationContainerRef<{}>;
  route: Route<'Update', { market: string }>;
}

export function UpdateMarketScreen(props: UpdateMarketScreenProps) {
  const actions: Action[] = [
    { key: 'Cancel', title: 'Cancelar', onPress: () => props.navigation.goBack() },
    { key: 'Save', title: 'Salvar', onPress: () => {
      if(market) {
        UpdateMarketController.save(market).then(
          () => props.navigation.goBack()
        );
      }
    } },
  ];
  const [ market, setMarket ] = useState<Market>(JSON.parse(props.route.params.market));
  
  return (
    <UpdateMarketContainer>
      <MarketForm market={ market } onChange={ (market)=> setMarket(market) }></MarketForm>
      <ActionBar actions={ actions }></ActionBar>
    </UpdateMarketContainer>
  )
}