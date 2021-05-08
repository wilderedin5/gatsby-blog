/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { Button } from '../shared/button'
import { useCategories } from './hooks/use-categories'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-row-gap: ${p => p.theme.space[1]};

  ${mediaQueries.md} {
    display: flex;
  }
`

const Category = styled(Button)`
  margin-right: ${p => p.theme.space[2]};
  border-color: ${p => p.active && p.theme.colors.black};
  background: ${p => (p.active ? 'transparent' : p.theme.colors.primary)};
  color: ${p => (p.active ? p.theme.colors.black : p.theme.colors.white)};
`

export const CategoryList = ({ selected, onChange, className }) => {
  const categories = useCategories()

  return (
    <Container className={className}>
      {categories.map((category, index) => (
        <Category
          active={category === selected}
          onClick={() => onChange(category)}
          key={index}
        >
          {category}
        </Category>
      ))}
    </Container>
  )
}
