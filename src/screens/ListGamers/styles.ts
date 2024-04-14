import styled from "styled-components/native";

export const ListGamersContainer = styled.View`
background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND };
flex: 1;
row-gap: 8px;
`

export const ListContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    rowGap: 8,
  }
})`
flex: 1;
padding: 0 ${ ({ theme }) => theme.SPACING.MEDIUM };
`;
