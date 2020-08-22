/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import BasePost from "./post"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[3]};
`

const Post = styled(BasePost)`
  margin-bottom: ${p => p.theme.space[2]};
`

const Section = ({ posts, className }) => (
  <Container className={className}>
    {posts.map(post => (
      <Post
        title={post.frontmatter.title}
        content={post.rawMarkdownBody}
        img={post.frontmatter.preview.src.fluid}
        slug={post.frontmatter.slug}
      />
    ))}
  </Container>
)

export default Section
