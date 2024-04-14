import styled from "styled-components/native"

export const InputContainer = styled.View`
display: flex;
flex-direction: row;
background-color: ${ ({ theme }) => theme.COLORS.WHITE };
border: 1px solid ${ ({ theme }) => theme.COLORS.PRIMARY };
border-radius: 8px;
overflow: hidden;
`

export const Input = styled.TextInput`
flex: 1;
font-size: 16px;
margin: ${ ({ theme }) => theme.SPACING.MEDIUM };
`

export const Button = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: ${ ({ theme }) => theme.COLORS.PRIMARY };
`