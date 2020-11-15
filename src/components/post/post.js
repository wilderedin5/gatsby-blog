/** @jsx jsx */
import { MDXRenderer as Content } from "gatsby-plugin-mdx";
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Info = styled.div`
  text-align: justify;
`;

const Img = styled(BaseImg)`
  height: 18.75rem;
`;

const Link = styled(BaseLink)`
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
  position: relative;

  :hover {
    :before {
      content: "Go to post page";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
      color: ${(p) => p.theme.colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
    }
  }
`;

export const Post = ({ title, content, img, slug, className }) => (
  <Link to={slug}>
    <Container className={className}>
      <Img fluid={img} />
      <Info>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Content>{content}</Content>
      </Info>
    </Container>
  </Link>
);
