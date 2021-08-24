import React from 'react'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { Button } from '../shared/button'
import { useCategories } from './hooks/use-categories'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-row-gap: ${p => p.theme.space[1]};
  grid-column-gap: ${p => p.theme.space[2]};

  ${mediaQueries.md} {
    display: flex;
  }
`

const Category = styled(Button)`
  border-color: ${p => p.active && p.theme.colors.black};
  background: ${p => (p.active ? 'transparent' : p.theme.colors.primary)};
  color: ${p => (p.active ? p.theme.colors.black : p.theme.colors.white)};
`

export const CategoryList = ({ selected, onCategoryChange, className }) => {
  const categories = useCategories()

  return (
    <Container className={className}>
      {categories.map((category, idx) => (
        <Category
          active={category === selected}
          onClick={() => onCategoryChange(category)}
          key={idx}
        >
          {category}
        </Category>
      ))}
    </Container>
  )
}
