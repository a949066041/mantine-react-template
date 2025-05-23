import { MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { scan } from 'react-scan'
import App from './App'
import { queryClient } from './store'
import { Notifications } from '@mantine/notifications';
import './setup'
import './style/index.css'

if (typeof window !== 'undefined') {
  scan({
    enabled: false,
    log: false, // logs render info to console (default: false)
  })
}

function bootstrap() {
  const rootEl = document.getElementById('root')
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl)
    root.render(
      <>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <Notifications />
            <App />
          </MantineProvider>
        </QueryClientProvider>
      </>,
    )
  }
}

bootstrap()
