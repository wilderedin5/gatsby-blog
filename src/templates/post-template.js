/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import MetaData from "../components/page-metadata"
import BasePost from "../components/post/post"
import Layout from "../components/layout"

const InnerContainer = styled(Container)`
  margin: ${p => p.theme.space[5]} auto;
`

const Post = styled(BasePost)`
  width: 100%;
  border: none;
  padding: 0;
`

const PostTemplate = ({ data }) => (
  <Layout>
    <MetaData title="Post page" />
    <InnerContainer>
      <Post
        title={data.page.frontmatter.title}
        content={data.page.rawMarkdownBody}
        img={data.page.frontmatter.preview.src.fluid}
      />
    </InnerContainer>
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query Post($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        preview {
          src: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      rawMarkdownBody
    }
  }
`
