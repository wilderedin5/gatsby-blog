import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import { Layout } from '../components/layout'
import { PostHeader } from '../components/blog/post-header'
import { Hr } from '../components/shared/rule'
import { Highlight } from '../components/shared/highlight'
import { mediaQueries } from '../gatsby-plugin-theme-ui'
import { Container } from '../components/shared/container'

const $Hr = styled(Hr)`
  margin: ${p => `${p.theme.space[4]} 0`};

  ${mediaQueries.md} {
    margin: ${p => `${p.theme.space[10]} 0`};
  }
`

const PostTemplate = ({ data }) => {
  const {
    frontmatter: { title, preview },
    body,
  } = data.page
  const components = { Highlight }

  return (
    <Layout title={title}>
      <Container>
        <PostHeader
          title={title}
          image={getImage(preview.childImageSharp.gatsbyImageData)}
        />
        <$Hr />
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
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
