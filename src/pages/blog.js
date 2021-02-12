/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { graphql } from "gatsby";
import { Section } from "../components/post/section";
import { Layout } from "../components/layout";

const BlogPage = ({ data }) => (
  <Layout title="Blog page">
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
        ...PostFragment
        slug
      }
    }
  }
`;
