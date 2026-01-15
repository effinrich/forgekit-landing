import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@forgekit-landing/theme'
import { App } from './app'

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </StrictMode>
  )
}
