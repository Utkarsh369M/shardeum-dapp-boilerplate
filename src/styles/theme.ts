// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    backgroundDark: '#4362e2',
  },
  styles: {
    global: {
      body: {
        bg: '#4362e2',
        color: 'white'
      }
    }
  }
})
