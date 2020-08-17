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

const PostTemplate = ({ data }) => (
  <Layout>
    <MetaData title="Post page" />
    <InnerContainer>
      <Section posts={data.page.edges} />
    </InnerContainer>
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query Post($id: String!) {
    page: allMarkdownRemark(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
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
    }
  }
`
