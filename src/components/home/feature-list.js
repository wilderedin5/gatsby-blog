/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { EmoIcon, GatsbyIcon, ReactIcon, TextIcon } from '../../assets/icons'
import { Feature } from './feature'

const Container = styled.div`
  display: grid;
  grid-column-gap: ${p => p.theme.space[3]};
  grid-row-gap: ${p => p.theme.space[3]};

  ${mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const FeatureList = ({ className }) => (
  <Container className={className}>
    <Feature title="React" icon={ReactIcon}>
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain
    </Feature>
    <Feature title="Gatsby" icon={GatsbyIcon}>
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain
    </Feature>
    <Feature title="Emotion" icon={EmoIcon}>
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain
    </Feature>
    <Feature title="Mdx" icon={TextIcon}>
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain
    </Feature>
  </Container>
)
