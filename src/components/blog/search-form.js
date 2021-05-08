/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'

import { Button } from '../shared/button'
import { Input } from '../shared/input'

const Form = styled.form`
  display: flex;
  align-items: center;
`

const $Input = styled(Input)`
  width: 20rem;
  margin-right: ${p => p.theme.space[2]};
`

export const SearchForm = ({ onChange }) => {
  const { register, handleSubmit } = useForm()

  const handleFormSubmit = ({ postName }) => {
    onChange(postName)
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <$Input {...register('postName')} placeholder="Type search value" />
      <Button type="submit">Search</Button>
    </Form>
  )
}
