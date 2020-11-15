/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import MetaData from "../components/page-metadata";
import { Post as BasePost } from "../components/post/post";
import { Layout } from "../components/layout";

const Post = styled(BasePost)`
  border: none;
  padding: 0;
`;

const PostTemplate = ({ data }) => {
  const { frontmatter, body } = data.page;
  return (
    <Layout>
      <MetaData title="Post page" />
      <Container>
        <Post
          title={frontmatter.title}
          content={body}
          img={frontmatter.preview.src.fluid}
        />
      </Container>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query Post($slug: String!) {
    page: mdx(slug: { eq: $slug }) {
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
  }
`;
