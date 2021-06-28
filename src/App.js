import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from './pages/Main'
import Login from './pages/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} />
      <Route component={MainPage} />
    </Switch>
  </BrowserRouter>
)

export default App
