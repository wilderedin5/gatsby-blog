import React from 'react'
import { Container } from 'theme-ui'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { Posts } from '../components/blog/posts'
import { Layout } from '../components/layout'
import { useCategory } from '../components/blog/hooks/use-category'
import { Toolbar } from '../components/blog/toolbar'
import { Hero } from '../components/shared/hero'

const $Toolbar = styled(Toolbar)`
  margin-bottom: ${p => p.theme.space[3]};
`

const $Hero = styled(Hero)`
  margin-bottom: ${p => p.theme.space[10]};
`

const BlogPage = ({ data }) => {
  const { posts, category, filterByCategory, filterByName } = useCategory()

  return (
    <Layout metaTitle="Blog page">
      <Container>
        <$Hero
          image={data.heroImage}
          content="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
          title="Blog"
        />
        <$Toolbar
          category={category}
          onCategoryChange={filterByCategory}
          onNameSearch={filterByName}
        />
        <Posts posts={posts} />
      </Container>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "images/blog/hero-image.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
