import { toTheme } from '@theme-ui/typography'
import funston from 'typography-theme-funston'

const theme = toTheme(funston)
export default {
  ...theme,
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    ...theme.fonts,
    default: 'Cabin Condensed, georgia, sans-serif'
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors: {
    ...theme.colors,
    text: '#333',
    primary: '#011919',
    secondary: '#019999',
    background: '#fff',
  },
  text: {
    color: 'background'
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
    }
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
