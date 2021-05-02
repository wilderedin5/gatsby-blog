/** @jsx jsx */
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { jsx, Container, Themed } from 'theme-ui'
import styled from '@emotion/styled'

import { Layout } from '../components/layout'

const Title = styled(Themed.h3)`
  margin: 0;
`

const PostTemplate = ({ data }) => {
  const {
    frontmatter: { title, preview },
    body,
  } = data.page

  return (
    <Layout title={title}>
      <Container>
        <GatsbyImage
          image={getImage(preview.childImageSharp.gatsbyImageData)}
        />
        <Title>{title}</Title>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query Post($slug: String!) {
    page: mdx(slug: { eq: $slug }) {
      ...PostFragment
      body
    }
  }
`
