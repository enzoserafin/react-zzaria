import { Link } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import { Title, PaperContainer } from './styles'
import Content from '../../components/Content'
import FooterCheckout from '../../components/FooterCheckout'
import TextField from '../../components/TextField'
import OrderInfo from '../../components/OrderInfo'
import { CHECKOUT_CONFIRMATION } from '../../routes'

const Checkout = () => {
  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Qual endereço para entrega?</Title>
            <PaperContainer>
              <Grid container spacing={2}>
                <TextField label='CEP' xs={4} autoFocus />
                <Grid item xs={8} />
                <TextField label='Rua' xs={9} />
                <TextField label='Número' xs={3} />
                <TextField label='Complemento' xs={12} />
                <TextField label='Cidade' xs={9} />
                <TextField label='Estado' xs={3} />
              </Grid>
            </PaperContainer>

            <Title>Qual o seu telefone?</Title>
            <PaperContainer>
              <TextField label='Telefone' xs={4} />
            </PaperContainer>

          </Grid>

          <Grid container item xs={12} md={6} direction='column'>
            <Title>Informações do seu pedido:</Title>
            <PaperContainer>
              <OrderInfo />
            </PaperContainer>
          </Grid>
        </Grid>

      </Content>
      <FooterCheckout>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to={CHECKOUT_CONFIRMATION}
        >
          Confirmar dados
        </Button>
      </FooterCheckout>
    </>
  )
}

export default Checkout
