import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Card,
  Checkbox,
  Content,
  Button,
  HeaderContent,
  Divider,
  Img,
  Label,
  PizzasGrid,
  Title,
  Footer,
  OrderContainer
} from './styles'
import { Container, Grid, Typography } from '@material-ui/core'
import t from 'prop-types'

import singularOrPlural from '../../utils/singularOrPlural'
import toMoney from '../../utils/to-money'
import { HOME, CHOOSE_PIZZA_QUANTITY } from '../../routes'
import useAuth from '../../hooks/auth'
import pizzasFlavours from '../../mock/pizzas-flavours'
// TODO AJUSTAR IMPORT DE IMGAGEM
import img from '../../assets/pizza-calabresa.png'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))
  const { userInfo } = useAuth()

  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id, name, slices } = location.state

  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return window
        .alert(`Você só pode adicionar ${flavours} ${singularOrPlural(flavours, 'sabor', 'sabores')}`)
    }

    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <Grid container direction='column' alignItems='center'>
            <Title variant='h4' gutterBottom>
              Escolha até {location.state.flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}:
            </Title>
          </Grid>
        </HeaderContent>

        <PizzasGrid>
          {pizzasFlavours.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <Card checked={!!checkboxes[pizza.id]}>
                <Label>

                  <Checkbox
                    checked={!!checkboxes[pizza.id]}
                    onChange={handleChangeCheckbox(pizza.id)}
                  />

                  <Img src={img} alt={pizza.name} />

                  <Divider />
                  <Typography>{pizza.name}</Typography>
                  <Typography variant='h5'>
                    {toMoney(pizza.value[id])}
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>

      <Footer>
        <Container>
          <Grid container>
            <OrderContainer>
              <Typography>
                <b>{userInfo.user.firstName}, se pedido é:</b>
              </Typography>
              <Typography>
                Pizza <b>{name.toUpperCase()}</b> - ({slices} fatias, {flavours} {`${singularOrPlural(flavours, 'sabor', 'sabores')}`})
              </Typography>
            </OrderContainer>
            <Grid item>
              <Button to={HOME}>
                Mudar tamanho
              </Button>
              <Button to={CHOOSE_PIZZA_QUANTITY} color='primary'>
                Quantas pizzas?
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Footer>
    </>
  )
}

function checkboxesChecked(checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
