import React from "react"
import styled from "@emotion/styled"
import { Container } from "theme-ui"

const OuterContainer = styled.div`
  background: ${p => p.theme.colors.primary};
`

const InnerContainer = styled(Container)`
  padding: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.white};
  text-align: center;
`

const Header = () => (
  <OuterContainer>
    <InnerContainer>Здесь будет меню</InnerContainer>
  </OuterContainer>
)

export default Header
