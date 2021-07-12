import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { AuthProvider, OrderProvider } from './contexts'
import App from './App'
import { GlobalStyle } from './global/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <OrderProvider>
          <CssBaseline />
          <GlobalStyle />
          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default Root
