import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@forgekit-landing/ui'
import { theme } from '@forgekit-landing/ui'
import { App } from './app/app'

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider theme={theme}>
        <App />
      </Provider>
    </StrictMode>
  )
}
