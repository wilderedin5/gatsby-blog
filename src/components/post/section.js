import React from "react"
import styled from "@emotion/styled"
import BasePost from "./post"

const Container = styled.div`
  margin-bottom: ${p => p.theme.space[3]};
`

const Post = styled(BasePost)`
  margin-bottom: ${p => p.theme.space[2]};
`

const Section = ({ posts, className }) => (
  <Container className={className}>
    {posts.map(({ node: post }) => (
      <Post title={post.frontmatter.title} content={post.rawMarkdownBody} />
    ))}
  </Container>
)

export default Section
