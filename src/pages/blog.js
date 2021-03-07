/** @jsx jsx */
import { useState } from 'react'
import { jsx, Container } from 'theme-ui'
import styled from '@emotion/styled'
import { Posts } from '../components/blog/posts'
import { Layout } from '../components/layout'
import { CategoriesList } from '../components/blog/categories-list'
import { usePosts } from '../components/blog/hooks/use-posts'

const StyledCategoriesList = styled(CategoriesList)`
  margin-bottom: ${p => p.theme.space[3]};
`

const BlogPage = () => {
  const [selectedCategory, setCategory] = useState('All')
  const posts = usePosts(selectedCategory)

  const handleCategorySelect = category => setCategory(category)

  return (
    <Layout metaTitle="Blog page">
      <Container>
        <StyledCategoriesList
          selectedCategory={selectedCategory}
          onChange={handleCategorySelect}
        />
        <Posts posts={posts} />
      </Container>
    </Layout>
  )
}

export default BlogPage
