/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import { SearchForm } from './search-form'
import { CategoryList } from './category-list'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Toolbar = ({ category, onCategory, onSearch, className }) => (
  <Container className={className}>
    <CategoryList selected={category} onChange={onCategory} />
    <SearchForm onChange={onSearch} />
  </Container>
)
