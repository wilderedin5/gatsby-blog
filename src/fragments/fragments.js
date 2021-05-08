import { graphql } from 'gatsby'

export const PostFragment = graphql`
  fragment PostFragment on Mdx {
    frontmatter {
      title
      author
      description
      category
      preview {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
