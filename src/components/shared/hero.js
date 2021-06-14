/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => `${p.theme.space[6]} ${p.theme.space[4]}`};
  border: ${p => `2px solid ${p.theme.colors.primary}`};
`

const Content = styled.div`
  ${mediaQueries.lg} {
    max-width: 60%;
  }
`

const Title = styled(Themed.h1)`
  margin: ${p => `0 0 ${p.theme.space[2]}`};
`

const $GatsbyImage = styled(GatsbyImage)`
  display: none;

  ${mediaQueries.lg} {
    display: block;
    max-height: 25rem;
    flex: 1;
  }
`

export const Hero = ({ image, title, content, className }) => (
  <Container className={className}>
    <Content>
      <Title>{title}</Title>
      {content}
    </Content>
    <$GatsbyImage
      image={getImage(image.childImageSharp.gatsbyImageData)}
      alt=""
      objectFit="contain"
    />
  </Container>
)
