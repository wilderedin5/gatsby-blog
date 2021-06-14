/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { Layout } from '../components/layout'
import { Hero } from '../components/shared/hero'
import { Features } from '../components/home/features'

const $Hero = styled(Hero)`
  margin-bottom: ${p => p.theme.space[10]};
`

const IndexPage = ({ data }) => (
  <Layout metaTitle="Home page">
    <Container>
      <$Hero
        image={data.heroImage}
        content="But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful."
        title="Welcome to the blog"
      />
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
