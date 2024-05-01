import styled from "styled-components/native";

export const ListMarketsContainer = styled.View`
background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND };
flex: 1;
row-gap: ${ ({ theme }) => theme.SPACING.MEDIUM };
`

export const SearchContainer = styled.View`
margin: ${ ({ theme }) => theme.SPACING.MEDIUM };
`

export const ListContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    rowGap: 8,
  }
})`
flex: 1;
padding: 0 ${ ({ theme }) => theme.SPACING.MEDIUM };
`;
