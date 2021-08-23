import React from 'react'
import { css } from '@emotion/react'
import { forwardRef } from 'react'
import { Box, useThemeUI } from 'theme-ui'

export const Button = forwardRef(
  ({ children, variant = 'primary', size = 'medium', ...rest }, ref) => {
    const { theme } = useThemeUI()

    return (
      <Box
        ref={ref}
        variant={variant}
        as="button"
        __themeKey="buttons"
        __css={css`
          display: inline-flex;
          flex-shrink: 0;
          border: 2px solid transparent;
          cursor: pointer;

          ${size === 'small' &&
          `
            padding: ${theme.space[0]} ${theme.space[1]};
            font-size: ${theme.fontSizes[0]};
        `}

          ${size === 'medium' &&
          `
            padding: ${theme.space[1]} ${theme.space[2]};
            font-size: ${theme.fontSizes[1]};
        `}

          ${size === 'large' &&
          `
            padding: ${theme.space[2]} ${theme.space[3]};
            font-size: ${theme.fontSizes[2]};
        `};
        `}
        {...rest}
      >
        {children}
      </Box>
    )
  },
)
