import { NavigationProp } from "@react-navigation/native";
import { Image, Text } from "react-native";
import { Gamer } from "../../interfaces/Gamer";
import editIcon from './../../../../assets/edit-icon.png';
import { Container, EditButton, GamerContainer } from "./styles";

interface GamerListItemProps {
  navigation: NavigationProp<any>;
  gamer: Gamer;
}

export function GamerListItem(props: GamerListItemProps) {
  return (
    <Container>
      <GamerContainer>
        <Text>Nome: { props.gamer.firstName } { props.gamer.lastName }</Text>
        <Text>E-mail: { props.gamer.email }</Text>
        <Text>Endereço: { props.gamer.address.street }, { props.gamer.address.addressNumber }</Text>
        <Text>Cidade: { props.gamer.address.city } - { props.gamer.address.stateCode }</Text>
      </GamerContainer>
      <EditButton onPress={ () => props.navigation.navigate('Update', { gamer: JSON.stringify(props.gamer) }) }>
        <Image source={ editIcon }></Image>
      </EditButton>
    </Container>
  )
}