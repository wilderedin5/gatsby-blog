import React from 'react'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { Footer } from './footer'
import { Header } from './header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const Main = styled.main`
  padding: ${p => `${p.theme.space[8]} 0`};
  flex: 1;

  ${mediaQueries.lg} {
    padding: ${p => `${p.theme.space[16]} 0`};
  }
`

export const Layout = ({ children, metaTitle }) => (
  <Container>
    <Header metaTitle={metaTitle} />
    <Main>{children}</Main>
    <Footer />
  </Container>
)
