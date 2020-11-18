/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Post as BasePost } from "../components/post/post";
import { Layout } from "../components/layout";

const Post = styled(BasePost)`
  border: none;
  padding: 0;
`;

const PostTemplate = ({ data }) => {
  const {
    frontmatter: { title, preview },
    body,
  } = data.page;

  return (
    <Layout title={title}>
      <Post title={title} content={body} img={preview.src.fluid} />
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query Post($slug: String!) {
    page: mdx(slug: { eq: $slug }) {
      ...PostFragment
    }
  }
`;
