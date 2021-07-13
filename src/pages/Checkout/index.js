import { Grid } from '@material-ui/core'
import { Content, Title, PaperContainer } from './styles'

const Checkout = () => {
  return (
    <Content>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Title>Qual endereço para entrega?</Title>
          <PaperContainer>Endereço para entrega</PaperContainer>

          <Title>Qual o seu telefone?</Title>
          <PaperContainer>Telefone</PaperContainer>

        </Grid>

        <Grid container item xs={12} md={6} direction='column'>
          <Title>Informações do seu pedido:</Title>
          <PaperContainer>Pedido</PaperContainer>
        </Grid>
      </Grid>

    </Content>
  )
}

export default Checkout
