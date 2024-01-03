import ReactDOM from 'react-dom/client';
import App from './components/App';
import './assets/fonts/fonts.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import globalStyles from './globalStyles';
import { COLORS, SIZES } from './theme';
import { Provider } from 'react-redux';
import store from './redux/store';


const theme = createTheme({
  typography: {
    fontFamily: "'Gilroy', sans-serif",
    h3: {
      fontSize: `${SIZES.FONT.BIG}`,
      fontWeight: `${SIZES.WEIGHT.W700}`,
    },
    h2: {
      fontSize: 28,
    },
    body1: {
      fontSize: `${SIZES.FONT.SMALL}`,
      fontWeight: `${SIZES.WEIGHT.W500}`,
      lineHeight: `${SIZES.LINE_HEIGHT.LH18}`,
      color: `${COLORS.LIGHT_GRAY}`,
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          padding: '0',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        icon: {
          '&.MuiPaginationItem-previous': {
            borderColor: 'red',
            // Стилі для стрілки "Назад"
            color: 'red', // Червоний колір
            // інші стилі, які ви хочете змінити
          },
          '&.MuiPaginationItem-next': {
            // Стилі для стрілки "Вперед"
            color: 'blue', // Синій колір
            // інші стилі, які ви хочете змінити
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
