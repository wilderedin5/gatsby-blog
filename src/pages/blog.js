/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";
import { graphql } from "gatsby";
import MetaData from "../components/page-metadata";
import { Section } from "../components/post/section";
import { Layout } from "../components/layout";

const BlogPage = ({ data }) => (
  <Layout>
    <MetaData title="Blog page" />
    <Container>
      <Section posts={data.posts.nodes} />
    </Container>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query AllPosts {
    posts: allMdx {
      nodes {
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
        slug
      }
    }
  }
`;
