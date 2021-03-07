/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: center;
`

const Title = styled(Styled.h1)``

export const Section = ({ title, children, className }) => (
  <Container className={className}>
    <Title>{title}</Title>
    {children}
  </Container>
)
