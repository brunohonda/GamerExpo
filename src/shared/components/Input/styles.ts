import styled from "styled-components/native"

export const InputContainer = styled.View`
background-color: ${ ({ theme }) => theme.COLORS.WHITE };
border: 1px solid black;
border-radius: 8px;
margin: 16px;
padding: 8px;
`

export const Input = styled.TextInput`
font-size: 16px;
`