/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import styled from '@emotion/styled'
import { GlobalStyle } from '../../style/globalStyle'
import MetaData from '../page-metadata'
import { Link } from '../shared/link'

const OuterContainer = styled.div`
  background: ${p => p.theme.colors.primary};
`

const NavContainer = styled(Container)`
  display: flex;
  padding: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.white};
  text-align: center;
`

const NavItem = styled(Link)`
  & + & {
    margin-left: ${p => p.theme.space[3]};
  }
`

const Navbar = ({ className }) => (
  <NavContainer className={className}>
    <NavItem variant="nav" to="/">
      Home
    </NavItem>
    <NavItem variant="nav" to="/blog">
      Blog
    </NavItem>
  </NavContainer>
)

export const Header = ({ className, metaTitle }) => (
  <OuterContainer className={className}>
    <MetaData title={metaTitle} />
    <GlobalStyle />
    <Navbar />
  </OuterContainer>
)
