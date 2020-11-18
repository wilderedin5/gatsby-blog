import { graphql } from "gatsby"

export const PostFragment = graphql`
  fragment PostFragment on Mdx {
    frontmatter {
        title
        preview {
          src: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
    }
    body
  }
`