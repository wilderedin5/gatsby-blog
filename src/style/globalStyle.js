import React from 'react'
import { Global } from '@emotion/react'

export const GlobalStyle = props => (
  <Global
    styles={theme => ({
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        margin: 0,
        fontFamily: theme.fontFamily.body,
      },
    })}
  />
)
