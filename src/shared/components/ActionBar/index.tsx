import { Action } from "../../interfaces/Action";
import { ActionBarButton, ActionBarButtonLabel, ActionBarContainer } from "./styles";

const actions: Action[] = [
  { key: 'Home', title: 'Início', onPress: () => {} },
  { key: 'Register', title: 'Cadastrar', onPress: () => {} },
];

export function ActionBar() {
  return (
    <ActionBarContainer>
      {
        actions.map(action => (
          <ActionBarButton key={ action.key } onPress={ action.onPress }>
            <ActionBarButtonLabel>{ action.title }</ActionBarButtonLabel>
          </ActionBarButton>
        ))
      }
    </ActionBarContainer>
  )
}