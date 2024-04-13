import { ActionBar } from "../../shared/components/ActionBar";
import { ListContainer, ListGamersContainer, SearchContainer } from "./styles";

export function ListGamersScreen() {
  return (
    <ListGamersContainer>
      <SearchContainer></SearchContainer>
      <ListContainer></ListContainer>
      <ActionBar></ActionBar>
    </ListGamersContainer>
  )
}