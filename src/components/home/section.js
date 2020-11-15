/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
`;

const Title = styled(Styled.h1)``;

const Content = styled.div``;

export const Section = ({ title, content }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Container>
);
