import React from "react"
import styled from "@emotion/styled"
import BaseImg from "gatsby-image"

const Container = styled.div`
  width: calc(50% - 1rem);
  padding: ${p => p.theme.space[2]};
  border: 1px solid ${p => p.theme.colors.primary};
`

const Title = styled.h2``

const Content = styled.p``

const Img = styled(BaseImg)`
  height: 18.75rem;
`

const Post = ({ title, content, img, className }) => (
  <Container className={className}>
    <Img fluid={img} />
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Container>
)

export default Post
