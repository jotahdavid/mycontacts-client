import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '@components/Header';

import GlobalStyles from '@styles/global';
import defaultTheme from '@styles/themes/default';
import { Container } from './styles';

import AppRoutes from '../../Routes';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Container>
          <Header />
          <AppRoutes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
