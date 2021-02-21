/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { PostLink } from "./post-link";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${(p) => p.theme.space[4]};
  grid-row-gap: ${(p) => p.theme.space[4]};
`;

export const Posts = ({ posts, className }) => (
  <Container className={className}>
    {posts.map((post, index) => (
      <PostLink post={post} key={index} />
    ))}
  </Container>
);
