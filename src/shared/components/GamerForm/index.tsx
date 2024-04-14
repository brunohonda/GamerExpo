import { Gamer } from "../../interfaces/Gamer";
import { Input } from "../Input";
import { InputWithButton } from "../InputWithButton";
import searchIcon from './../../../../assets/search.png';
import { Container } from "./styles";

export function GamerForm(props: { gamer?: Gamer }) {
  return (
    <Container>
      <Input placeholder="Primeiro nome" value={ props.gamer?.firstName }></Input>
      <Input placeholder="Último nome" value={ props.gamer?.lastName }></Input>
      <Input placeholder="E-mail" value={ props.gamer?.email }></Input>
      <InputWithButton placeholder="CEP" value={ props.gamer?.address.postalCode } iconSource={ searchIcon }></InputWithButton>
      <Input placeholder="Rua" value={ props.gamer?.address.street }></Input>
      <Input placeholder="Número" value={ props.gamer?.address.addressNumber?.toString() }></Input>
      <Input placeholder="Bairro" value={ props.gamer?.address.neighborhood }></Input>
      <Input placeholder="Cidade" value={ props.gamer?.address.city }></Input>
      <Input placeholder="UF" value={ props.gamer?.address.stateCode }></Input>
    </Container>
  )
}