/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'

export const usePosts = selectedCategory => {
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

  return posts.nodes.filter(
    ({ frontmatter: { category } }) =>
      selectedCategory === 'All' || category === selectedCategory,
  )
}
