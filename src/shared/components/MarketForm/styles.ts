import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    rowGap: 8,
  }
})`
flex: 1;
padding: ${ ({ theme }) => theme.SPACING.MEDIUM };
`