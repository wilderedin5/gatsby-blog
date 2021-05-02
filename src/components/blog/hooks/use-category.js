/** @jsx jsx */
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const useCategory = () => {
  const [category, setCategory] = useState('All')

  const { posts } = useStaticQuery(
    graphql`
      query Posts {
        posts: allMdx {
          nodes {
            ...PostFragment
            fields {
              slug
            }
          }
        }
      }
    `,
  )

  const formatPosts = posts.nodes.filter(
    ({ frontmatter }) =>
      category === 'All' || frontmatter.category === category,
  )

  return [{ name: category, posts: formatPosts }, setCategory]
}
