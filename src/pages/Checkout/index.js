import { Button, Grid, List, ListItem, Typography } from '@material-ui/core'
import { Content, Title, PaperContainer, FooterContent } from './styles'
import Footer from '../../components/Footer'
import TextField from '../../components/TextField'
import useOrder from '../../hooks/order'
import singularOrPlural from '../../utils/singularOrPlural'

const Checkout = () => {
  const { order } = useOrder()

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

              <List>
                {order.pizzas.map((pizza, index) => {
                  const { pizzaFlavours, pizzaSize, quantity } = pizza
                  const { name, slices, flavours } = pizzaSize

                  return (
                    <ListItem key={index}>
                      <Typography>
                        <b>{quantity}</b>{' '}
                        {singularOrPlural(quantity, 'pizza', 'pizzas')}{' '}
                        <b>{name.toUpperCase()}</b> - ({slices} fatias, {flavours} {`${singularOrPlural(flavours, 'sabor', 'sabores')}`})

                        <br />

                        {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
                        <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
                      </Typography>
                    </ListItem>
                  )
                })}
              </List>
            </PaperContainer>
          </Grid>
        </Grid>

      </Content>

      <Footer>
        <FooterContent>
          <Button variant='contained' color='primary'>
            Confirmar dados
          </Button>
        </FooterContent>
      </Footer>
    </>
  )
}

export default Checkout
