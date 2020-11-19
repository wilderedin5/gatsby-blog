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

export const Section = ({ posts, className }) => (
  <Container className={className}>
    {posts.map(({ slug, frontmatter, body }) => (
      <CardFlip key={slug}>
        <Post
          title={frontmatter.title}
          content={body}
          img={frontmatter.preview.src.fluid}
          slug={slug}
        />
        <Post title={frontmatter.title} content={body} slug={slug} />
      </CardFlip>
    ))}
  </Container>
);
