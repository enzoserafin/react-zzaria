import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Checkbox, Content, Divider, Img, Label, PizzasGrid, Title } from './styles'
import { Grid, Typography } from '@material-ui/core'
import t from 'prop-types'

import singularOrPlural from '../../utils/singularOrPlural'
import { HOME } from '../../routes'
import pizzasFlavours from '../../mock/pizzas-flavours'
// TODO AJUSTAR IMPORT DE IMGAGEM
import img from '../../assets/pizza-calabresa.png'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id } = location.state

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
        <Grid container direction='column' alignItems='center'>
          <Title variant='h4' gutterBottom>
            Escolha até {location.state.flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}:
          </Title>
        </Grid>
      </Content>

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
                <Typography variant='h5'>{pizza.value[id]}</Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
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
