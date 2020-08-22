/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container } from "theme-ui"
import styled from "@emotion/styled"
import MetaData from "../components/page-metadata"
import Layout from "../components/layout"

const InnerContainer = styled(Container)`
  margin: ${p => p.theme.space[5]} auto;
`

const IndexPage = () => (
  <Layout>
    <MetaData title="Home page" />
    <InnerContainer>Home page</InnerContainer>
  </Layout>
)

export default IndexPage
