/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import styled from "@emotion/styled";
import { Layout } from "../components/layout";
import { Section as BaseSection } from "../components/home/section";
import FeatureList from "../components/home/feature-list";

const Section = styled(BaseSection)`
  margin-bottom: 40px;
`;

const IndexPage = () => (
  <Layout title="Home page">
    <Container>
      <Section title="Welcome to the blog">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful.
      </Section>
      <FeatureList />
    </Container>
  </Layout>
);

export default IndexPage;
