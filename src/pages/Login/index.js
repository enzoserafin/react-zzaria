import { useState, useEffect, useCallback } from 'react'
import { Grid, Button } from '@material-ui/core'
import { Container, GitHubButton, Logo } from './styles'
import firebase from '../../services/Firebase'

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { isUserLoggedIn, user } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={10}>

        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant='contained' onClick={logout}>Sair</Button>
            </>
          )}

          {!isUserLoggedIn && (
            <GitHubButton onClick={login} >Entrar com GitHub</GitHubButton>
          )}
        </Grid>

      </Grid>
    </Container>
  )
}

export default Login
