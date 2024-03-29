import React from 'react'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { PostLink } from './post-link'

const Container = styled.div`
  display: grid;
  grid-column-gap: ${p => p.theme.space[5]};
  grid-row-gap: ${p => p.theme.space[5]};

  ${mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Posts = ({ posts, className }) => (
  <Container className={className}>
    {posts.map((post, idx) => (
      <PostLink post={post} key={idx} />
    ))}
  </Container>
)
