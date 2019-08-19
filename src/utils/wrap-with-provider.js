import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

const wrapWithProvider = ({ element }) => (
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>
)

export default wrapWithProvider;