/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { useCategories } from './hooks/use-categories'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-row-gap: ${p => p.theme.space[1]};

  ${mediaQueries.md} {
    display: flex;
  }
`

const Category = styled.div`
  border: ${p =>
    `2px solid ${p.active ? p.theme.colors.black : 'transparent'}`};
  padding: ${p => `${p.theme.space[0]} ${p.theme.space[3]}`};
  margin-right: ${p => p.theme.space[2]};
  background: ${p => !p.active && p.theme.colors.primary};
  color: ${p => !p.active && p.theme.colors.white};
  cursor: pointer;

  :hover {
    background: transparent;
    color: ${p => p.theme.colors.black};
    border-color: ${p => p.theme.colors.black};
  }
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
