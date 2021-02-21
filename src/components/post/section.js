/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Post } from "./post";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${(p) => p.theme.space[2]};
  grid-row-gap: ${(p) => p.theme.space[2]};
`;

export const Section = ({ posts, className }) => (
  <Container className={className}>
    {posts.map((post, index) => (
      <Post post={post} key={index} />
    ))}
  </Container>
);
