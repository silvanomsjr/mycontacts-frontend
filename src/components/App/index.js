import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from '../../assets/styles/AppStyles';

import MainRoutes from '../../Routes';

import Header from '../Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <MainRoutes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
