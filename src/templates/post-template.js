/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { jsx, Styled, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { Layout } from '../components/layout'

const Title = styled(Styled.h3)`
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
