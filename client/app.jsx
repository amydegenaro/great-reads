import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// import {BrowserRouter} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan, pink } from '@mui/material/colors';
import store from './store'
import Main from './components/main'
// import ProspectusProBold from '../public/fonts/ProspectusPro/ProspectusXLBld.otf'
// import ProspectusProRegular from '../public/fonts/ProspectusPro/ProspectusSReg.otf'
// import ProspectusProThin from '../public/fonts/ProspectusPro/ProspectusSThn.otf'

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: pink[900],
    },
  },
  // typography: {
  //   fontFamily: 'ProspectusPro',
  // },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Prospectus Pro XL Bold';
  //         src: url('/fonts/ProspectusPro/ProspectusXLBld.otf')
  //           format('opentype');
  //       }
  //       @font-face {
  //         font-family: 'Prospectus Pro S Regular';
  //         src: url('/fonts/ProspectusPro/ProspectusSReg.otf')
  //           format('opentype');
  //       }
  //       @font-face {
  //         font-family: 'Prospectus Pro S Thin';
  //         src: url('/fonts/ProspectusPro/ProspectusSThn.otf')
  //           format('opentype');
  //       }
  //     `,
  //   },
  // },
});

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById('app')
)
