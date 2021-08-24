import React from 'react'
import styled from '@emotion/styled'

import { GlobalStyle } from '../../style/globalStyle'
import { BrandIcon } from '../../assets/icons'
import MetaData from '../page-metadata'
import { Link } from '../shared/link'
import { Container } from '../shared/container'

const OuterContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${p => p.theme.colors.primary};
`

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.white};
  text-align: center;
`

const NavItem = styled(Link)`
  & + & {
    margin-left: ${p => p.theme.space[3]};
  }
`

const Logo = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: ${p => p.theme.space[10]};
`

const Navbar = ({ className }) => (
  <NavContainer className={className}>
    <Logo as={BrandIcon} />
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
