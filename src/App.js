import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CssBaseline, LinearProgress } from '@material-ui/core'

const MainPage = lazy(() => import('./pages/Main'))
const Login = lazy(() => import('./pages/Login'))

const App = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route component={MainPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
)

export default App
