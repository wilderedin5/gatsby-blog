/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { useState } from 'react'

const Container = styled.div`
  position: relative;
  transform-style: preserve-3d;
`

const Card = styled.div`
  position: absolute;
  backface-visibility: hidden;
  transition: transform ease 750ms;
`

const Back = styled(Card)`
  transform: ${p => (p.isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)')};
`

const Front = styled(Card)`
  z-index: 2;
  transform: ${p => (p.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`

export const CardFlip = ({ children, className }) => {
  const [isFlipped, setFlipped] = useState(false)

  const handleFlipChange = () => {
    setFlipped(!isFlipped)
  }

  return (
    <Container
      className={className}
      onMouseEnter={handleFlipChange}
      onMouseLeave={handleFlipChange}
    >
      <Front isFlipped={isFlipped}>{children[0]}</Front>
      <Back isFlipped={isFlipped}>{children[1]}</Back>
    </Container>
  )
}
