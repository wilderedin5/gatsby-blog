/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import BaseImg from "gatsby-image"
import Link from "../shared/link"

const Container = styled.div`
  width: calc(50% - 2rem);
  padding: ${p => p.theme.space[2]};
  border: 1px solid ${p => p.theme.colors.primary};
`

const Title = styled.h2``

const Content = styled.p``

const Img = styled(BaseImg)`
  height: 18.75rem;
`

const Post = ({ title, content, img, slug, className }) => (
  <Container className={className}>
    <Img fluid={img} />
    <Title>{title}</Title>
    <Content>{content}</Content>
    {slug && (
      <Link variant="primary" to={slug}>
        Go to post page
      </Link>
    )}
  </Container>
)

export default Post
