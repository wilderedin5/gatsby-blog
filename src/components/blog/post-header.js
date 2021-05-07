/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image'
import { jsx, Themed } from 'theme-ui'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled(Themed.h1)`
  margin: ${p => `0 0 0 ${p.theme.space[2]}`};
`

const $GatsbyImage = styled(GatsbyImage)`
  border: ${p => `2px solid ${p.theme.colors.primary}`};
`

export const PostHeader = ({ image, title, className }) => (
  <Container className={className}>
    <$GatsbyImage image={image} alt="" />
    <Title>{title}</Title>
  </Container>
)
