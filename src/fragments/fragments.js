import { graphql } from "gatsby";

export const PostFragment = graphql`
  fragment PostFragment on Mdx {
    frontmatter {
      title
      description
      category
      preview {
        src: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;
