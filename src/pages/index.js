import React from "react"
import { Container } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import MetaData from "../components/page-metadata"
import Section from "../components/post/section"
import Layout from "../components/layout"

const InnerContainer = styled(Container)`
  margin: ${p => p.theme.space[5]} auto;
`

const IndexPage = ({ data }) => (
  <Layout>
    <MetaData title="Home page" />
    <InnerContainer>
      <Section posts={data.posts.edges} />
    </InnerContainer>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AllPosts {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          rawMarkdownBody
        }
      }
    }
  }
`
