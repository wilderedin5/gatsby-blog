import React from 'react'
import { Themed } from 'theme-ui'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { Link } from '../shared/link'
import { useLatestPost } from './hooks/use-latest-post'

const Title = styled(Themed.h3)`
  margin: ${p => `0 0 ${p.theme.space[0]}`};
  font-size: ${p => p.theme.fontSizes[2]};

  ${mediaQueries.md} {
    font-size: ${p => p.theme.fontSizes[3]};
  }

  ${mediaQueries.lg} {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`

const Info = styled.div`
  padding: ${p =>
    `${p.theme.space[0]} ${p.theme.space[3]} ${p.theme.space[2]}`};
`

const Description = styled.p`
  margin: 0;
  font-size: ${p => p.theme.fontSizes[1]};
`

const $Link = styled(Link)`
  position: relative;
  border: 2px solid ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  box-shadow: ${p => p.theme.shadows.primary};

  :hover {
    border-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.secondary};
  }
`

const Label = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 1;
  padding: ${p => p.theme.space[0]};
  font-size: ${p => p.theme.fontSizes[1]};
  background: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`

const Author = styled.div`
  margin: ${p => `${p.theme.space[0]} 0`};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[1]};
`

export const PostLink = ({ post, className }) => {
  const latestPost = useLatestPost()
  const {
    frontmatter: { preview, title, description, author },
    fields: { slug },
  } = post

  return (
    <$Link to={slug} className={className}>
      <GatsbyImage
        image={getImage(preview.childImageSharp.gatsbyImageData)}
        alt=""
      />
      <Info>
        <Title>{title}</Title>
        <Author>Author: {author}</Author>
        <Description>{description}</Description>
        {title === latestPost && <Label>Latest</Label>}
      </Info>
    </$Link>
  )
}
