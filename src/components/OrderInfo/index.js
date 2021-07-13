import { List, ListItem, Typography } from '@material-ui/core'
import useOrder from '../../hooks/order'
import singularOrPlural from '../../utils/singularOrPlural'

const OrderInfo = () => {
  const { order } = useOrder()

  return (
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
  )
}

export default OrderInfo
