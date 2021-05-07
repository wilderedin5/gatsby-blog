/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
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
  padding: ${p => `${p.theme.space[3]} ${p.theme.space[2]}`};

  :before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
    background: ${p => `repeating-linear-gradient(
      -45deg,
      ${p.theme.colors.black},
      ${p.theme.colors.black} 10px,
      ${p.theme.colors.secondary} 10px,
      ${p.theme.colors.secondary} 20px
      )`};
  }
`

const Description = styled.p`
  margin: 0;
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

    ${Title}, ${Description} {
      color: ${p => p.theme.colors.white};
      filter: ${p => `drop-shadow(2px 2px 0 ${p.theme.colors.black})`};
    }

    ${Info}:before {
      content: '';
    }
  }
`

const Label = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  font-size: ${p => p.theme.fontSizes[0]};
  padding: ${p => `${p.theme.space[0]} ${p.theme.space[1]}`};
  background: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`

export const PostLink = ({ post, className }) => {
  const latestPost = useLatestPost()
  const {
    frontmatter: { preview, title, description },
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
        <Description>{description}</Description>
        {title === latestPost && <Label>Latest</Label>}
      </Info>
    </$Link>
  )
}
