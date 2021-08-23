import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Themed } from 'theme-ui'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.lg} {
    align-items: center;
    flex-direction: row;
  }
`

const Title = styled(Themed.h1)`
  margin: ${p => `${p.theme.space[1]} 0 0`};
  font-size: ${p => p.theme.fontSizes[4]};

  ${mediaQueries.sm} {
    font-size: ${p => p.theme.fontSizes[6]};
  }

  ${mediaQueries.lg} {
    margin: ${p => `0 0 0 ${p.theme.space[4]}`};
    font-size: ${p => p.theme.fontSizes[8]};
  }
`

const $GatsbyImage = styled(GatsbyImage)`
  border: ${p => `2px solid ${p.theme.colors.primary}`};
  align-self: flex-start;
`

export const PostHeader = ({ image, title, className }) => (
  <Container className={className}>
    <$GatsbyImage imgStyle={{ objectFit: 'contain' }} image={image} alt="" />
    <Title>{title}</Title>
  </Container>
)
