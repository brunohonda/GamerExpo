import styled from "styled-components/native";

export const ActionBarContainer = styled.View`
width: 100%;
flex-direction: row;
`

export const ActionBarButton = styled.TouchableOpacity`
display: flex;
flex: 1;
height: 50px;
justify-content: center;
align-items: center;
background-color: ${ ({ theme }) => theme.COLORS.PRIMARY };
`

export const ActionBarButtonLabel = styled.Text`
color: ${ ({ theme }) => theme.COLORS.TEXT_INVERSE };
font-size: 16px;
font-weight: 600;
`