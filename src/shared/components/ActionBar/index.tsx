import { Action } from "../../interfaces/Action";
import { ActionBarButton, ActionBarButtonLabel, ActionBarContainer } from "./styles";

export function ActionBar(props: { actions: Action[] }) {
  return (
    <ActionBarContainer>
      {
        props.actions.map(action => (
          <ActionBarButton key={ action.key } onPress={ action.onPress }>
            <ActionBarButtonLabel>{ action.title }</ActionBarButtonLabel>
          </ActionBarButton>
        ))
      }
    </ActionBarContainer>
  )
}