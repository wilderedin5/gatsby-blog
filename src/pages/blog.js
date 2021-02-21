/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { graphql } from "gatsby";
import { Posts } from "../components/blog/posts";
import { Layout } from "../components/layout";

const BlogPage = ({ data }) => (
  <Layout metaTitle="Blog page">
    <Container>
      <Posts posts={data.posts.nodes} />
    </Container>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query AllPosts {
    posts: allMdx {
      nodes {
        ...PostFragment
        fields {
          slug
        }
      }
    }
  }
`;
