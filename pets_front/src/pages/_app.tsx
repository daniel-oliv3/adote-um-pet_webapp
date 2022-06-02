import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return 
      <div>
        Oi...
        <Component {...pageProps} />
      </div>
}

export default MyApp
