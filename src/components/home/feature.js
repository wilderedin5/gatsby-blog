/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  border: ${(p) => `1px solid ${p.theme.colors.primary}`};
  padding: ${(p) => p.theme.space[3]};
`;

const Title = styled(Styled.h3)``;

const Feature = ({ title, children, className }) => (
  <Container className={className}>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default Feature;
