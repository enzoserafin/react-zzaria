import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import AuthProvider from './contexts/auth'
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
        <CssBaseline />
        <GlobalStyle />
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default Root
