import { Card, Grid, Typography } from '@material-ui/core'
import { Divider, PizzasGrid, CardActionArea, Pizza, PizzaText } from './styles'
import SingularOrPlural from '../../utils/singularOrPlural'
import { CHOOSE_PIZZA_FLAVOURS } from '../../routes'

import pizzaSizes from '../../mock/pizzas-sizes'

const PizzaCard = () => (
  <PizzasGrid>
    {pizzaSizes.map((pizza) => (
      <Grid item key={pizza.id} xs>
        <Card>
          <CardActionArea to={{
            pathname: CHOOSE_PIZZA_FLAVOURS,
            state: { pizzaSize: pizza }
          }}>
            <Pizza>
              <PizzaText>
                {pizza.size}cm
              </PizzaText>
            </Pizza>

            <Divider />

            <Typography variant='h5'>{pizza.name}</Typography>
            <Typography>
              {pizza.slices} fatias, {' '}
              {pizza.flavours} {' '}
              {SingularOrPlural(pizza.flavours, 'sabor', 'sabores')}
            </Typography>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </PizzasGrid>
)

export default PizzaCard
