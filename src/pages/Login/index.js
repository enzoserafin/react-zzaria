import { Grid } from '@material-ui/core'
import { Container, GitHubButton, Logo } from './styles'
import useAuth from '../../hooks/auth'

const Login = () => {
  const { login } = useAuth()

  return (
    <Container>
      <Grid container justify='center' spacing={5}>

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
