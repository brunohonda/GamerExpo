import { Action } from "../../interfaces/Action";
import { ActionBarButton, ActionBarContainer } from "./styles";

const actions: Action[] = [
  { key: 'Home', title: 'Início' },
  { key: 'Register', title: 'Cadastrar' },
];

export function ActionBar() {
  return (
    <ActionBarContainer>
      { actions.map(action => <ActionBarButton key={ action.key } title={ action.title }></ActionBarButton>) }
    </ActionBarContainer>
  )
}