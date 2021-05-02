/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import { useCategories } from './hooks/use-categories'

const Container = styled.div`
  display: flex;
`

const Category = styled.div`
  border: ${p =>
    `2px solid ${p.active ? p.theme.colors.black : 'transparent'}`};
  padding: ${p => `${p.theme.space[0]} ${p.theme.space[3]}`};
  margin-right: ${p => p.theme.space[2]};
  background: ${p => (p.active ? 'transparent' : p.theme.colors.primary)};
  color: ${p => (p.active ? p.theme.colors.black : p.theme.colors.white)};
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
