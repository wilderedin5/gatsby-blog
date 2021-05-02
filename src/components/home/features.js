/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import styled from '@emotion/styled'

import { FeatureList } from './feature-list'

const Container = styled.div``

const Title = styled(Themed.h1)`
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]};
`

export const Features = ({ className }) => (
  <Container className={className}>
    <Title>Blog features</Title>
    <FeatureList />
  </Container>
)
