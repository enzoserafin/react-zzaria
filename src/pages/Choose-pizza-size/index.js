import useAuth from '../../hooks/auth'
import { Grid } from '@material-ui/core'
import Content from '../../components/Content'
import PizzaCard from '../../components/PizzaCard'
import { Title } from './styles'

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth()

  return (
    <Content>
      <Grid container direction='column' alignItems='center'>
        <Title variant='h3' gutterBottom>
          {`O que vai ser hoje, ${userInfo.user.firstName}?`}
        </Title>

        <Title variant='h4' gutterBottom>
          Escolha o tamanho da pizza:
        </Title>
      </Grid>

      <PizzaCard />
    </Content>
  )
}

export default ChoosePizzaSize
