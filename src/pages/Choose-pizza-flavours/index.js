import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Card,
  Checkbox,
  HeaderContent,
  Divider,
  Img,
  Label,
  PizzasGrid,
  Title
} from './styles'
import { Grid, Typography } from '@material-ui/core'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import t from 'prop-types'

import singularOrPlural from '../../utils/singularOrPlural'
import toMoney from '../../utils/to-money'
import { CHOOSE_PIZZA_QUANTITY, HOME } from '../../routes'
import pizzaFlavours from '../../mock/pizzas-flavours'
// TODO AJUSTAR IMPORT DE IMGAGEM
import img from '../../assets/pizza-calabresa.png'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id } = location.state.pizzaSize

  const handleChangeCheckbox = (pizzaId) => (e) => {
    console.log('checkboxes', checkboxes)
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
          {pizzaFlavours.map((pizza) => (
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

      <Footer
        buttons={{
          back: {
            children: 'Mudar tamanho'
          },
          action: {
            to: {
              pathname: CHOOSE_PIZZA_QUANTITY,
              state: {
                ...location.state,
                pizzaFlavours: getFlavoursNameAndId(checkboxes)
              }
            },
            children: 'Quantas pizzas?',
            disabled: checkboxesChecked(checkboxes).length === 0
          }
        }}
      />
    </>
  )
}

function checkboxesChecked(checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

function getFlavoursNameAndId(checkboxes) {
  return Object.entries(checkboxes)
    .filter(([, value]) => !!value)
    .map(([id]) => ({
      id,
      name: pizzaFlavours.find((flavour) => flavour.id === id).name
    }))
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
