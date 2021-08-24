import React from 'react'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'

import { mediaQueries } from '../../gatsby-plugin-theme-ui'
import { Button } from '../shared/button'
import { Input } from '../shared/input'

const Form = styled.form`
  display: flex;
`

const $Input = styled(Input)`
  margin-right: ${p => p.theme.space[1]};

  ${mediaQueries.md} {
    width: 19rem;
  }
`

export const SearchForm = ({ onNameSearch }) => {
  const { register, handleSubmit } = useForm()

  const handleFormSubmit = ({ postName }) => {
    onNameSearch(postName)
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <$Input {...register('postName')} placeholder="Type search value" />
      <Button type="submit">Search</Button>
    </Form>
  )
}
