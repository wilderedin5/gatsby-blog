/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import styled from '@emotion/styled'
import { Layout } from '../components/layout'
import { Hero } from '../components/home/hero'
import { Features } from '../components/home/features'

const StyledHero = styled(Hero)`
  margin-bottom: ${p => p.theme.space[5]};
`

const IndexPage = () => (
  <Layout metaTitle="Home page">
    <Container>
      <StyledHero />
      <Features />
    </Container>
  </Layout>
)

export default IndexPage
