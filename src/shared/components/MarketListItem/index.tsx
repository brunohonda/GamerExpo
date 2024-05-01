import { NavigationProp } from "@react-navigation/native";
import { Image, Text } from "react-native";
import { Market } from "../../interfaces/Market";
import editIcon from './../../../../assets/edit-icon.png';
import { Container, EditButton, MarketContainer } from "./styles";

interface MarketListItemProps {
  navigation: NavigationProp<any>;
  market: Market;
}

export function MarketListItem(props: MarketListItemProps) {
  return (
    <Container>
      <MarketContainer>
        <Text>Nome: { props.market.name }</Text>
        <Text>Telefone: { props.market.phone }</Text>
        <Text>Endereço: { props.market.address.street }, { props.market.address.addressNumber }. { props.market.address.neighborhood }</Text>
        <Text>Cidade: { props.market.address.city } - { props.market.address.stateCode }</Text>
      </MarketContainer>
      <EditButton onPress={ () => props.navigation.navigate('Update', { market: JSON.stringify(props.market) }) }>
        <Image source={ editIcon }></Image>
      </EditButton>
    </Container>
  )
}