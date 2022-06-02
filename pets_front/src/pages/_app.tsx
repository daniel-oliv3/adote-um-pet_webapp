import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
      <ThemeProvider theme={tema}>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp
