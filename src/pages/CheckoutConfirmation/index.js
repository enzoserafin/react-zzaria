import { Link } from 'react-router-dom'
import { Divider, Header, PaperContainer, Title } from './styles'
import { Button, Container, Typography } from '@material-ui/core'
import OrderInfo from '../../components/OrderInfo'
import Content from '../../components/Content'
import FooterCheckout from '../../components/FooterCheckout'
import useAuth from '../../hooks/auth'
import useOrder from '../../hooks/order'
import { CHECKOUT_SUCCESS } from '../../routes'

const CheckoutConfirmation = () => {
  const { userInfo } = useAuth()
  const { sendOrder } = useOrder()

  return (
    <>
      <Content>
        <Header>
          <Title variant='h4'>Oi {userInfo.user.firstName}</Title>
          <Typography>
            Confere, por favor, se está tudo certo com o seu pedido antes de finalizar
          </Typography>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <Typography variant='h6'>Seu pedido:</Typography>
            <OrderInfo />

            <Divider />

            <Typography variant='h6>'>Endereço para entrega:</Typography>
            <Typography>
              Rua tal, 10, Compl., Bairro, CEP 10100-100 - Cidade/UF
            </Typography>

            <Divider />

            <Typography variant='h6>'>Telefone para contato:</Typography>
            <Typography>
              {'(44) 99999-9999'}
            </Typography>

          </PaperContainer>
        </Container>
      </Content >
      <FooterCheckout justifyContent='center'>
        <Button
          variant='contained'
          color='primary'
          size='large'
          component={Link}
          to={CHECKOUT_SUCCESS}
          onClick={sendOrder}
        >
          Tudo certo
        </Button>
      </FooterCheckout>
    </>
  )
}

export default CheckoutConfirmation
