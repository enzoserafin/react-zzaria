import { Link } from 'react-router-dom'
import { Divider, Header, PaperContainer, Title } from './styles'
import { Button, Container, Typography } from '@material-ui/core'
import OrderInfo from '../../components/OrderInfo'
import Content from '../../components/Content'
import FooterCheckout from '../../components/FooterCheckout'
import useAuth from '../../hooks/auth'
import { HOME } from '../../routes'

const CheckoutSuccess = () => {
  const { userInfo } = useAuth()

  return (
    <>
      <Content>
        <Header>
          <Title variant='h4'>Prontinho, {userInfo.user.firstName}</Title>
          <Typography>
            Seu pedido será entregue no endereço abaixo em até
          </Typography>

          <Typography variant='h6'>
            40 minutos =)
          </Typography>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <Typography variant='h6'>Seu pedido:</Typography>
            <OrderInfo />

            <Divider />

            <Typography variant='h6'>Endereço para entrega:</Typography>
            <Typography>
              Rua tal, 10, Compl., Bairro, CEP 10100-100 - Cidade/UF
            </Typography>

            <Divider />

            <Typography variant='h6'>Telefone para contato:</Typography>
            <Typography>
              {'(44) 99999-9999'}
            </Typography>

          </PaperContainer>
        </Container>
      </Content >
      <FooterCheckout justifyContent='center'>
        <Button
          color='secondary'
          size='large'
          component={Link}
          to={HOME}
        >{'<'}Voltar para a Página Inicial</Button>
      </FooterCheckout>
    </>
  )
}

export default CheckoutSuccess
