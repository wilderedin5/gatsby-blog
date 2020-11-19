/** @jsx jsx */
import { MDXRenderer } from "gatsby-plugin-mdx";
import { jsx, Styled } from "theme-ui";
import styled from "@emotion/styled";
import BaseImg from "gatsby-image";
import { Link as BaseLink } from "gatsby";

const Container = styled.div`
  padding: ${(p) => p.theme.space[3]};
  border: 2px solid ${(p) => p.theme.colors.primary};
`;

const Title = styled(Styled.h3)`
  margin: 0;
`;

const Header = styled.div``;

const Info = styled.div`
  text-align: justify;
`;

const Img = styled(BaseImg)`
  height: 18.75rem;
`;

const Link = styled(BaseLink)`
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
`;

export const Post = ({ title, content, img, slug, className }) => (
  <Link to={slug}>
    <Container className={className}>
      {img && <Img fluid={img} />}
      <Info>
        <Header>
          <Title>{title}</Title>
        </Header>
        <MDXRenderer>{content}</MDXRenderer>
      </Info>
    </Container>
  </Link>
);
