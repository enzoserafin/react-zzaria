import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Grid, Typography } from '@material-ui/core'
import Header from '../../components/Header'
import PizzaCard from '../../components/PizzaCard'
import { Content, Spacer } from './styles'

const Main = () => {
  const { userInfo } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  return (
    <>
      <Header />

      <Spacer />

      <Content>
        <Grid container direction='column' alignItems='center'>
          <Typography variant='h3' gutterBottom>
            {`O que vai ser hoje, ${userName}?`}
          </Typography>

          <Typography variant='h4' gutterBottom>
            Escolha o tamanho da pizza:
          </Typography>
        </Grid>

        <PizzaCard />
      </Content>
    </>
  )
}

export default Main
