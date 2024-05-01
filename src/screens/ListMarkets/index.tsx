import { yupResolver } from "@hookform/resolvers/yup";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Text } from "react-native";
import * as yup from "yup";
import { ActionBar } from "../../shared/components/ActionBar";
import { InputWithButton } from "../../shared/components/InputWithButton";
import { MarketListItem } from "../../shared/components/MarketListItem";
import { Action } from "../../shared/interfaces/Action";
import { Market } from "../../shared/interfaces/Market";
import searchIcon from './../../../assets/search.png';
import { ListMarketsController } from "./controller";
import { ListContainer, ListMarketsContainer, SearchContainer } from "./styles";


export function ListMarketsScreen({ navigation }: any) {
  const actions: Action[] = [
    { key: 'Register', title: 'Cadastrar', onPress: () => navigation.navigate('Register') },
  ];
  const { control, formState } = useForm<{ search: string }>({
    resolver: yupResolver(
      yup.object({
        search: yup.string().required()
      })
    )
  });
  const [ markets, setMarkets ] = useState<Market[]>([]);

  useFocusEffect(() => {
    ListMarketsController.getList()
      .then(data => setMarkets(data))
  });

  return (
    <ListMarketsContainer>
      <SearchContainer>
        <InputWithButton
          placeholder="Buscar Mercado"
          iconSource={ searchIcon }
          control={ control }
          name="search"
          formState={ formState }
        ></InputWithButton>
      </SearchContainer>
      <ListContainer>
        { markets.length === 0 && <Text>Nenhum mercado cadastrado ainda</Text> }
        { markets.map((market, index) => <MarketListItem key={ index } market={ market } navigation={ navigation }></MarketListItem>) }
      </ListContainer>
      <ActionBar actions={ actions }></ActionBar>
    </ListMarketsContainer>
  )
}