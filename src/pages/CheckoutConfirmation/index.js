import { Divider, Header, PaperContainer, Title } from './styles'
import { Container, Typography } from '@material-ui/core'
import OrderInfo from '../../components/OrderInfo'
import Content from '../../components/Content'
import useAuth from '../../hooks/auth'

const CheckoutConfirmation = () => {
  const { userInfo } = useAuth()

  return (
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
  )
}

export default CheckoutConfirmation
