import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${ ({ theme }) => theme.COLORS.WHITE };
flex: 1;
flex-direction: row;
align-items: center;
border-radius: ${ ({ theme }) => theme.SPACING.MEDIUM };
padding: ${ ({ theme }) => theme.SPACING.MEDIUM };
`

export const MarketContainer = styled.View`
flex: 1;
row-gap: ${ ({ theme }) => theme.SPACING.SMALL };
`

export const EditButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
`