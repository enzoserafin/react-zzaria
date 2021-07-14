import { Link, Redirect } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import { Title, PaperContainer } from './styles'
import Content from '../../components/Content'
import FooterCheckout from '../../components/FooterCheckout'
import FormAddress from '../../components/FormAddress'
import TextField from '../../components/TextField'
import OrderInfo from '../../components/OrderInfo'
import { CHECKOUT_CONFIRMATION, HOME } from '../../routes'
import useOrder from '../../hooks/order'

const Checkout = () => {
  const { order } = useOrder()

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />
  }

  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Qual endereço para entrega?</Title>
            <PaperContainer>
              <FormAddress />
            </PaperContainer>

            <Title>Qual o seu telefone?</Title>
            <PaperContainer>
              <TextField label='Telefone' xs={4} />
            </PaperContainer>

          </Grid>

          <Grid container item xs={12} md={6} direction='column'>
            <Title>Informações do seu pedido:</Title>
            <PaperContainer>
              <OrderInfo showOptions />
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
          Confirmar pedido
        </Button>
      </FooterCheckout>
    </>
  )
}

export default Checkout
