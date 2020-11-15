/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Post } from "./post";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const Section = ({ posts, className }) => (
  <Container className={className}>
    {posts.map(({ slug, frontmatter, body }) => (
      <Post
        key={slug}
        title={frontmatter.title}
        content={body}
        img={frontmatter.preview.src.fluid}
        slug={slug}
      />
    ))}
  </Container>
);
