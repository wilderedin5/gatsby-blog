/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import styled from '@emotion/styled'

import { Posts } from '../components/blog/posts'
import { Layout } from '../components/layout'
import { useCategory } from '../components/blog/hooks/use-category'
import { Toolbar } from '../components/blog/toolbar'

const $Toolbar = styled(Toolbar)`
  margin-bottom: ${p => p.theme.space[3]};
`

const BlogPage = () => {
  const { posts, category, filterByCategory, filterByName } = useCategory()

  return (
    <Layout metaTitle="Blog page">
      <Container>
        <$Toolbar
          category={category}
          onCategory={filterByCategory}
          onSearch={filterByName}
        />
        <Posts posts={posts} />
      </Container>
    </Layout>
  )
}

export default BlogPage
