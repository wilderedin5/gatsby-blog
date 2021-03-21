/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => `${p.theme.space[6]} ${p.theme.space[4]}`};
  border: ${p => `2px solid ${p.theme.colors.primary}`};
`

const Content = styled.div`
  width: 60%;
`

const Title = styled(Styled.h1)`
  margin: ${p => `0 0 ${p.theme.space[2]}`};
`

const Lead = styled.p`
  margin: 0;
`

const StyledImg = styled(Img)`
  flex: 1;
`

export const Hero = ({ image, className }) => (
  <Container className={className}>
    <Content>
      <Title>Welcome to the blog</Title>
      <Lead>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful.
      </Lead>
    </Content>
    <StyledImg fluid={image.childImageSharp.fluid} />
  </Container>
)
