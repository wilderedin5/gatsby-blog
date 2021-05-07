/** @jsx jsx */
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getImage } from 'gatsby-plugin-image'
import { jsx, Container } from 'theme-ui'
import styled from '@emotion/styled'

import { Layout } from '../components/layout'
import { PostHeader } from '../components/blog/post-header'
import { Hr } from '../components/shared/rule'

const $Hr = styled(Hr)`
  margin: ${p => `${p.theme.space[4]} 0`};
`

const PostTemplate = ({ data }) => {
  const {
    frontmatter: { title, preview },
    body,
  } = data.page

  return (
    <Layout title={title}>
      <Container>
        <PostHeader
          title={title}
          image={getImage(preview.childImageSharp.gatsbyImageData)}
        />
        <$Hr />
        <MDXRenderer>{body}</MDXRenderer>
        <$Hr />
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
