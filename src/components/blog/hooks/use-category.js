import { useMemo, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const useCategory = () => {
  const [category, setCategory] = useState('All')
  const [postName, setPostName] = useState()

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

  const formatPosts = useMemo(
    () =>
      posts.nodes.filter(({ frontmatter }) => {
        const formatPostName = postName?.toLowerCase()
        const formatTitle = frontmatter.title.toLowerCase()
        return (
          (postName ? formatTitle.includes(formatPostName) : true) &&
          (category === 'All' || category === frontmatter.category)
        )
      }),
    [category, postName, posts],
  )

  return {
    posts: formatPosts,
    category,
    filterByCategory: setCategory,
    filterByName: setPostName,
  }
}
