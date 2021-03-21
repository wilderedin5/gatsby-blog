/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'

export const useLatestPost = post => {
  const { latestPost } = useStaticQuery(
    graphql`
      query LatestPost {
        latestPost: allMdx(
          sort: { fields: frontmatter___date, order: ASC }
          limit: 1
        ) {
          nodes {
            frontmatter {
              title
            }
          }
        }
      }
    `,
  )
  return post === latestPost.nodes[0].frontmatter.title
}
