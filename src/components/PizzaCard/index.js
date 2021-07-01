import { Grid, Typography } from '@material-ui/core'
import { Divider, PaperPizza, Pizza, PizzaText } from './styles'

const pizzaSizes = [
  {
    id: 0,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1
  },
  {
    id: 1,
    name: 'Média',
    size: 30,
    slices: 6,
    flavours: 2
  },
  {
    id: 2,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3
  }
]

const PizzaCard = () => (
  <Grid container spacing={3}>
    {pizzaSizes.map((pizza) => (
      <Grid item key={pizza.id} xs={4}>
        <PaperPizza>
          <Pizza>
            <PizzaText>
              {pizza.size}cm
            </PizzaText>
          </Pizza>

          <Divider />

          <Typography variant='h5'>{pizza.name}</Typography>
          <Typography>{pizza.slices} fatias, {pizza.flavours} sabores</Typography>
        </PaperPizza>
      </Grid>
    ))}
  </Grid>
)

export default PizzaCard
