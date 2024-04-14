import styled from "styled-components/native";

export const ListGamersContainer = styled.View`
background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND };
flex: 1;
row-gap: 8px;
`

export const SearchContainer = styled.View`
border: 1px solid black;
border-radius: 8px;
margin: 16px;
padding: 8px;
`

export const SearchInput = styled.TextInput`
font-size: 16px;
`

export const ListContainer = styled.ScrollView`
flex: 1;
`