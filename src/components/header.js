/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Container } from "theme-ui"
import GlobalStyle from "../style/globalStyle"
import Link from "./shared/link"

const OuterContainer = styled.div`
  background: ${p => p.theme.colors.primary};
`

const InnerContainer = styled(Container)`
  padding: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.white};
  text-align: center;
`

const Navbar = styled.nav`
  display: flex;
  a:not(:last-child) {
    margin-right: ${p => p.theme.space[3]};
  }
`

const Header = () => (
  <OuterContainer>
    <GlobalStyle />
    <InnerContainer>
      <Navbar>
        <Link variant="nav" to="/">
          Home
        </Link>
        <Link variant="nav" to="/blog">
          Blog
        </Link>
      </Navbar>
    </InnerContainer>
  </OuterContainer>
)

export default Header
