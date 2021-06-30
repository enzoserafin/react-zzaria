import { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { Container, GitHubButton, Logo } from './styles'
import { AuthContext } from '../../contexts/auth'

const Login = () => {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify='center' spacing={10}>

        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login} >
            Entrar com GitHub
          </GitHubButton>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Login
