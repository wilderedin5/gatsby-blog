/** @jsx jsx */
import { MDXRenderer as Content } from "gatsby-plugin-mdx"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import BaseImg from "gatsby-image"
import Link from "../shared/link"

const Container = styled.div`
  width: calc(50% - 2rem);
  padding: ${p => p.theme.space[2]};
  border: 2px solid ${p => p.theme.colors.primary};
`

const Title = styled(Styled.h3)``

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Info = styled.div`
  padding: ${p => p.theme.space[2]};
`

const Img = styled(BaseImg)`
  height: 18.75rem;
  border: 2px solid
    ${p => (p.isOpened ? p.theme.colors.primary : "transparent")};
`

const Post = ({ title, content, img, slug, className }) => (
  <Container className={className}>
    <Img isOpened={slug} fluid={img} />
    <Info>
      <Header>
        <Title>{title}</Title>
        {slug && (
          <Link variant="fill" to={slug}>
            Go to post page
          </Link>
        )}
      </Header>
      <Content>{content}</Content>
    </Info>
  </Container>
)

export default Post
