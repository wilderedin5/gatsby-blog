/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Feature from "./feature";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${(p) => p.theme.space[3]};
  grid-row-gap: ${(p) => p.theme.space[3]};
`;

const FeatureList = ({ className }) => (
  <Container className={className}>
    <Feature title="React">
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain
    </Feature>
    <Feature title="Gatsby">
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain
    </Feature>
    <Feature title="Emotion">
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain
    </Feature>
    <Feature title="Mdx">
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain
    </Feature>
  </Container>
);

export default FeatureList;
