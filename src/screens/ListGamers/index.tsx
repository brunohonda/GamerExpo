import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Text } from "react-native";
import * as yup from "yup";
import { ActionBar } from "../../shared/components/ActionBar";
import { GamerListItem } from "../../shared/components/GamerListItem";
import { InputWithButton } from "../../shared/components/InputWithButton";
import { Action } from "../../shared/interfaces/Action";
import { Gamer } from "../../shared/interfaces/Gamer";
import searchIcon from './../../../assets/search.png';
import { ListGamersController } from "./controller";
import { ListContainer, ListGamersContainer, SearchContainer } from "./styles";


export function ListGamersScreen({ navigation }: any) {
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
  const [ gamers, setGamers ] = useState<Gamer[]>([]);

  useEffect(
    () => {
      ListGamersController.getList()
        .then(data => {
          setGamers(data);
        });
    },
    []
  );

  return (
    <ListGamersContainer>
      <SearchContainer>
        <InputWithButton
          placeholder="Buscar Gamer"
          iconSource={ searchIcon }
          control={ control }
          name="search"
          formState={ formState }
        ></InputWithButton>
      </SearchContainer>
      <ListContainer>
        { gamers.length === 0 && <Text>Nenhum Gamer cadastrado ainda</Text> }
        { gamers.map((gamer, index) => <GamerListItem key={ index } gamer={ gamer } navigation={ navigation }></GamerListItem>) }
      </ListContainer>
      <ActionBar actions={ actions }></ActionBar>
    </ListGamersContainer>
  )
}