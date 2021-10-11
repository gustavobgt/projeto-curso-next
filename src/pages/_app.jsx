import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
// import { GlobalStyles } from '../styles/global-styles';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

App.propTypes = AppProps;
