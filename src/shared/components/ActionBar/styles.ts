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
background-color: #313131;
`

export const ActionBarButtonLabel = styled.Text`
color: white;
font-size: 16px;
font-weight: 600;
`