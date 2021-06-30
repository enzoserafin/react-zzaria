import { lazy, useEffect, useContext, useState, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import t from 'prop-types'
import firebase from './services/Firebase'
import { AuthContext } from './contexts/auth'

const MainPage = lazy(() => import('./pages/Main'))
const Login = lazy(() => import('./pages/Login'))

const App = ({ location }) => {
  const { userInfo, setUserInfo, logout } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
      setDidCheckUserIn(true)
    })

    window.logout = logout
  }, [])

  if (!didCheckUserIn) {
    console.log('ainda não chegou se usuário esta logado')
    return <LinearProgress />
  }

  console.log('Já chegou se usuário esta logado ou não')

  if (isUserLoggedIn) {
    console.log('usuário está logado')
    if (location.pathname === '/login') {
      console.log('usuário esta logado e esta na página de login. go to Home')
      return <Redirect to='/' />
    } else {
      console.log('usuário está logado, mas NÃO está na página de login')
    }
  } else {
    console.log('usuário não esta logado')
    if (location.pathname !== '/login') {
      console.log('usuário não está logado, nem esta no login Go to Login')
      return <Redirect to='/login' />
    } else {
      console.log('usuário não está logado e na página de login')
    }
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
