import React from 'react'
import { Themed } from 'theme-ui'
import styled from '@emotion/styled'

import { FeatureList } from './feature-list'

const Container = styled.div``

const Title = styled(Themed.h1)`
  margin: ${p => `0 0 ${p.theme.space[4]}`};
  text-align: center;
`

export const Features = ({ className }) => (
  <Container className={className}>
    <Title>Blog features</Title>
    <FeatureList />
  </Container>
)
