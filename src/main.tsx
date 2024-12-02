import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { ColorModeProvider } from "@/components/ui/color-mode"
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </ColorModeProvider>
    </Provider>
  </StrictMode>,
)
