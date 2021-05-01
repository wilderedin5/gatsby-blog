/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { Hero } from '../components/home/hero'
import { Features } from '../components/home/features'

const StyledHero = styled(Hero)`
  margin-bottom: ${p => p.theme.space[5]};
`

const IndexPage = ({ data }) => (
  <Layout metaTitle="Home page">
    <Container>
      <StyledHero image={data.heroImage} />
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
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
