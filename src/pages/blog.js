/** @jsx jsx */
import { useState } from 'react'
import { jsx, Container } from 'theme-ui'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Posts } from '../components/blog/posts'
import { Layout } from '../components/layout'
import { CategoriesList } from '../components/blog/categories-list'

const StyledCategoriesList = styled(CategoriesList)`
  margin-bottom: ${p => p.theme.space[3]};
`

const BlogPage = ({ data }) => {
  const [selectedCategory, setCategory] = useState('All')

  const formatPosts = data.posts.nodes.filter(
    ({ frontmatter: { category } }) =>
      selectedCategory === 'All' || category === selectedCategory,
  )

  const handleCategorySelect = category => {
    setCategory(category)
  }

  return (
    <Layout metaTitle="Blog page">
      <Container>
        <StyledCategoriesList
          selectedCategory={selectedCategory}
          onChange={handleCategorySelect}
        />
        <Posts posts={formatPosts} />
      </Container>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query AllPosts {
    posts: allMdx {
      nodes {
        ...PostFragment
        fields {
          slug
        }
      }
    }
  }
`
