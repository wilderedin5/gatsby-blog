/** @jsx jsx */
import { css } from '@emotion/react'
import { forwardRef } from 'react'
import { Input as ThemeInput, jsx, useThemeUI } from 'theme-ui'

export const Input = forwardRef(
  ({ children, size = 'medium', ...rest }, ref) => {
    const { theme } = useThemeUI()

    return (
      <ThemeInput
        ref={ref}
        css={css`
          ${size === 'small' &&
          `
            padding: ${theme.space[0]} ${theme.space[1]};
            font-size: ${theme.fontSizes[0]};
        `}

          ${size === 'medium' &&
          `
            padding: ${theme.space[0]} ${theme.space[2]};
            font-size: ${theme.fontSizes[1]};
        `}

        
          ${size === 'large' &&
          `
            padding: ${theme.space[2]} ${theme.space[3]};
            font-size: ${theme.fontSizes[2]};
        `}
        `}
        {...rest}
      >
        {children}
      </ThemeInput>
    )
  },
)
