import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Grid, Paper, Typography } from '@material-ui/core'
import Header from '../../components/Header'
import { Content, Spacer } from './styles'

const pizzaSizes = [
  {
    id: 0,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1
  },
  {
    id: 1,
    name: 'Média',
    size: 30,
    slices: 6,
    flavours: 2
  },
  {
    id: 2,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3
  }
]

const Main = () => {
  const { userInfo } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  return (
    <>
      <Header />

      <Spacer />

      <Content>
        <Grid container direction='column' alignItems='center'>
          <Typography variant='h3'>
            {`O que vai ser hoje, ${userName}?`}
          </Typography>

          <Typography variant='h4'>
            Escolha o tamanho da pizza:
          </Typography>
        </Grid>
        <Grid container spacing={16}>
          {pizzaSizes.map((pizza) => (
            <Grid item key={pizza.id} xs={4}>
              <Paper style={{ padding: 20 }}>
                <div>{pizza.size}cm</div>
                <Typography>{pizza.name}</Typography>
                <Typography>{pizza.slices} fatias, {pizza.flavours} sabores</Typography>
              </Paper>
            </Grid>
          ))}

        </Grid>
      </Content>
    </>
  )
}

export default Main
