/** @jsx jsx */
import { MDXRenderer } from "gatsby-plugin-mdx";
import { jsx, Styled } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { Link as BaseLink } from "../shared/link";

const Title = styled(Styled.h3)`
  margin: 0;
`;

const Link = styled(BaseLink)`
  position: relative;
  padding: ${(p) => p.theme.space[3]};
  border: 2px solid ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;

  :hover {
    :before {
      content: "Click to open";
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
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
      z-index: 1;

      width: 100%;
      height: 100%;

      background: rgba(102, 51, 153, 0.3);
    }
  }
`;

export const Post = ({ post, className }) => {
  const {
    frontmatter,
    body,
    fields: { slug },
  } = post;

  return (
    <Link to={slug} className={className}>
      <Img fluid={frontmatter.preview.src.fluid} />
      <Title>{frontmatter.title}</Title>
      <MDXRenderer>{body}</MDXRenderer>
    </Link>
  );
};
