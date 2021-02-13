/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.75rem auto;
  grid-column-gap: ${(p) => p.theme.space[3]};
  grid-row-gap: ${(p) => p.theme.space[2]};
  align-items: center;
  border: ${(p) => `1px solid ${p.theme.colors.primary}`};
  padding: ${(p) => p.theme.space[3]};
  box-shadow: ${(p) => `0 0 12px 0 ${p.theme.colors.primary}`};
`;

const Title = styled(Styled.h3)`
  margin: 0;
`;

const Icon = styled.svg`
  width: 2rem;
  height: 2rem;
`;

const Description = styled.p`
  grid-column: 1/-1;
  margin: 0;
`;

export const Feature = ({ title, icon, children, className }) => (
  <Container className={className}>
    <Icon as={icon} />
    <Title>{title}</Title>
    <Description>{children}</Description>
  </Container>
);
