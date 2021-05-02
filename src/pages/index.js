/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { Layout } from '../components/layout'
import { Hero } from '../components/home/hero'
import { Features } from '../components/home/features'

const $Hero = styled(Hero)`
  margin-bottom: ${p => p.theme.space[5]};
`

const IndexPage = ({ data }) => (
  <Layout metaTitle="Home page">
    <Container>
      <$Hero image={data.heroImage} />
      <Features />
    </Container>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    heroImage: file(
      relativePath: { eq: "images/general/gatsby-astronaut.png" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
