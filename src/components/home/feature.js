import React from 'react'
import { Themed } from 'theme-ui'
import { AnimateKeyframes } from 'react-simple-animate'
import styled from '@emotion/styled'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.75rem auto;
  grid-column-gap: ${p => p.theme.space[5]};
  grid-row-gap: ${p => p.theme.space[0]};
  align-items: center;
  padding: ${p => p.theme.space[3]};
  border: ${p => `2px solid ${p.theme.colors.primary}`};
  box-shadow: ${p => p.theme.shadows.primary};
`

const Title = styled(Themed.h3)`
  margin: 0;
`

const Icon = styled.svg`
  width: 2rem;
  height: 2rem;
`

const Description = styled.p`
  grid-column: 1/-1;
  margin: 0;
`

const animationSettings = {
  play: true,
  delay: 0.5,
  duration: 0.5,
  iterationCount: 4,
  keyframes: [
    { 0: 'transform: translateX(0%)' },
    { 15: 'transform: scale(0.91)' },
    { 30: 'transform: translateX(-30px) rotate(6deg)' },
    { 45: 'transform: translateX(15px) rotate(-6deg)' },
    { 60: 'transform: translateX(-15px) rotate(3.6deg)' },
    { 75: 'transform: translateX(9px) rotate(-2.4deg)' },
    { 100: 'transform: translateX(-6px) rotate(1.2deg)' },
  ],
}

export const Feature = ({ title, icon, children, className }) => (
  <AnimateKeyframes {...animationSettings}>
    <Container className={className}>
      <Icon as={icon} />
      <Title>{title}</Title>
      <Description>{children}</Description>
    </Container>
  </AnimateKeyframes>
)
