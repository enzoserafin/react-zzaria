import { Redirect } from 'react-router-dom'
import { Content, Divider, Img, Label, PizzasGrid, Title } from './styles'
import { Card, Grid, Typography } from '@material-ui/core'
import t from 'prop-types'

import singularOrPlural from '../../utils/singularOrPlural'
import { HOME } from '../../routes'
import pizzasFlavours from '../../mock/pizzas-flavours'

import calabresa from '../../assets/pizza-calabresa.png'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id } = location.state
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
            <Card>
              <Label>
                <input type='checkbox' />
                <Img src={calabresa} alt={pizza.name} />

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

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
