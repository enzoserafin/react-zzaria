import t from 'prop-types'
import { ListItem } from './styles'
import { IconButton, List, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import useOrder from '../../hooks/order'
import singularOrPlural from '../../utils/singularOrPlural'

const OrderInfo = ({ showOptions }) => {
  const { order, removePizzaFromOrder } = useOrder()

  return (
    <List>
      {order.pizzas.map((pizza) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza
        const { name, slices, flavours } = pizzaSize

        return (
          <ListItem key={pizza.id}>
            <Typography>
              <b>{quantity}</b>{' '}
              {singularOrPlural(quantity, 'pizza', 'pizzas')}{' '}
              <b>{name.toUpperCase()}</b> - ({slices} fatias, {flavours} {`${singularOrPlural(flavours, 'sabor', 'sabores')}`})

              <br />

              {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
              <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
            </Typography>

            {showOptions && (
              <IconButton
                title='Remover'
                color='secondary'
                onClick={() => removePizzaFromOrder(pizza.id)}
              >
                <Close />
              </IconButton>
            )}
          </ListItem>
        )
      })}
    </List>
  )
}

OrderInfo.propTypes = {
  showOptions: t.bool
}

export default OrderInfo
