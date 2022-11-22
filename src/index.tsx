import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoutes from './routes/AppRouter';
import { persistor, store } from './store';

const fonts = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
  },
});


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <ThemeProvider theme={fonts}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline/>
            <AppRoutes/>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>
);

