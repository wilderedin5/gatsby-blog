/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import MetaData from "../components/page-metadata"
import Section from "../components/post/section"
import Layout from "../components/layout"

const InnerContainer = styled(Container)`
  margin: ${p => p.theme.space[5]} auto;
`

const BlogPage = ({ data }) => (
  <Layout>
    <MetaData title="Blog page" />
    <InnerContainer>
      <Section posts={data.posts.nodes} />
    </InnerContainer>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query AllPosts {
    posts: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
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
  }
`
