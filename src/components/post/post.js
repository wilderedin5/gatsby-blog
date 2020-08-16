import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  padding: ${p => p.theme.space[2]};
  border: 1px solid ${p => p.theme.colors.primary};
`

const Title = styled.h2``

const Content = styled.p``

const Post = ({ title, content, className }) => (
  <Container className={className}>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Container>
)

export default Post
