/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { CardFlip } from "../shared/card-flip";
import { Post } from "./post";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 600px;
  grid-gap: 20px;
`;

const InvertedPost = styled(Post)`
  :before {
    content: "Click to open";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    background: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.white};
  }
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(102, 51, 153, 0.3);
  }
`;

export const Section = ({ posts, className }) => (
  <Container className={className}>
    {posts.map((post, index) => (
      <CardFlip key={index}>
        <Post post={post} />
        <InvertedPost post={post} />
      </CardFlip>
    ))}
  </Container>
);
