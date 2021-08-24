import React from 'react'
import styled from '@emotion/styled'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { SearchForm } from './search-form'
import { CategoryList } from './category-list'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  ${mediaQueries.md} {
    flex-flow: row;
    align-items: center;
  }
`

const $CategoryList = styled(CategoryList)`
  margin: ${p => `0 0 ${p.theme.space[2]}`};

  ${mediaQueries.md} {
    margin: 0;
  }
`

export const Toolbar = ({ category, onCategoryChange, onNameSearch, className }) => (
  <Container className={className}>
    <$CategoryList selected={category} onCategoryChange={onCategoryChange} />
    <SearchForm onNameSearch={onNameSearch} />
  </Container>
)
