import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';
import Cabecalho from '../ui/components/Cabecalho/Cabecalho';

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
      <ThemeProvider theme={tema}>
        <Cabecalho></Cabecalho>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp
