import styled from "styled-components/native";

export const ActionBarContainer = styled.View`
width: 100%;
flex-direction: row;
`

export const ActionBarButton = styled.TouchableOpacity<{ disabled?: boolean; }>`
display: flex;
flex: 1;
height: 50px;
justify-content: center;
align-items: center;
background-color: ${ (props) => props.disabled ? props.theme.COLORS.SECONDARY : props.theme.COLORS.PRIMARY };
`

export const ActionBarButtonLabel = styled.Text`
color: ${ ({ theme }) => theme.COLORS.TEXT_INVERSE };
font-size: 16px;
font-weight: 600;
`