import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@forgekit-landing/theme';
import { SpeedInsights } from "@vercel/speed-insights/react"

import { App } from './app';

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <SpeedInsights />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </StrictMode>
  )
}
