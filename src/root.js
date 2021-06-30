import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import AuthProvider from './contexts/auth'
import App from './app'

const Root = () => (
  <AuthProvider>
    <CssBaseline />
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </AuthProvider>
)

export default Root
