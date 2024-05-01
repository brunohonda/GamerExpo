import styled from "styled-components/native"

export const ErrorMessage = styled.Text`
color: ${ ({ theme }) => theme.COLORS.DANGER };
padding-left: ${ ({ theme }) => theme.SPACING.MEDIUM };
padding-right: ${ ({ theme }) => theme.SPACING.MEDIUM };
font-size: 12px;
`