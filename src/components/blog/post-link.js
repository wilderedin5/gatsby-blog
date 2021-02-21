/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { Link as BaseLink } from "../shared/link";

const Title = styled(Styled.h3)`
  margin: 0;
`;

const Info = styled.div`
  position: relative;
  padding: ${(p) => p.theme.space[3]};
`;

const Description = styled.p`
  margin: 0;
`;

const Link = styled(BaseLink)`
  border: 2px solid ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
  box-shadow: ${(p) => `0 0 12px 0 ${p.theme.colors.primary}`};

  :hover {
    border-color: ${(p) => p.theme.colors.secondary};
    box-shadow: ${(p) => `0 0 12px 0 ${p.theme.colors.secondary}`};

    ${Title}, ${Description} {
      position: relative;
      z-index: 1;
      color: ${(p) => p.theme.colors.white};
      filter: ${(p) => `drop-shadow(2px 2px 0 ${p.theme.colors.black})`};
    }

    ${Info}:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.7;
      background: ${(p) => `repeating-linear-gradient(
      -45deg,
      ${p.theme.colors.black},
      ${p.theme.colors.black} 10px,
      ${p.theme.colors.secondary} 10px,
      ${p.theme.colors.secondary} 20px
      )`};
    }
  }
`;

export const PostLink = ({ post, className }) => {
  const {
    frontmatter: { preview, title, description },
    fields: { slug },
  } = post;

  return (
    <Link to={slug} className={className}>
      <Img fluid={preview.src.fluid} />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Link>
  );
};
