/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import styled from '@emotion/styled'

import { Posts } from '../components/blog/posts'
import { Layout } from '../components/layout'
import { CategoryList } from '../components/blog/category-list'
import { useCategory } from '../components/blog/hooks/use-category'

const $CategoryList = styled(CategoryList)`
  margin-bottom: ${p => p.theme.space[3]};
`

const BlogPage = () => {
  const [category, setCategory] = useCategory()

  const handleCategorySelect = category => setCategory(category)

  return (
    <Layout metaTitle="Blog page">
      <Container>
        <$CategoryList
          selected={category.name}
          onChange={handleCategorySelect}
        />
        <Posts posts={category.posts} />
      </Container>
    </Layout>
  )
}

export default BlogPage
