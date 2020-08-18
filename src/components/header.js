/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Container } from "theme-ui"
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
`

const Header = () => (
  <OuterContainer>
    <InnerContainer>
      <Navbar>
        <Link variant="nav" to="/">
          Home
        </Link>
      </Navbar>
    </InnerContainer>
  </OuterContainer>
)

export default Header
