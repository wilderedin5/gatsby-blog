/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'

export const useCategories = () => {
  const { categories } = useStaticQuery(
    graphql`
      query Categories {
        categories: allMdx {
          group(field: frontmatter___category, limit: 1) {
            nodes {
              frontmatter {
                category
              }
            }
          }
        }
      }
    `,
  )
  return [
    'All',
    ...categories.group.map(({ nodes }) => nodes[0].frontmatter.category),
  ]
}
