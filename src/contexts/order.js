import { createContext, useState } from 'react'
import t from 'prop-types'
import { v4 } from 'uuid'
import firebase, { db } from '../services/Firebase'
import useAuth from '../hooks/auth'

const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const [pizzas, addPizza] = useState([])
  const [orderInProgress, setOrderInProgress] = useState(false)
  const [phone, addPhone] = useState('')
  const [address, addAddress] = useState({})
  const { userInfo } = useAuth()

  function addPizzaToOrder(pizza) {
    if (orderInProgress) {
      return addPizza((pizzas) => pizzas.concat(newPizza(pizza)))
    }
    setOrderInProgress(true)
    addPizza([newPizza(pizza)])
  }

  async function sendOrder() {
    console.log('send order')

    try {
      await db.collection('orders').add({
        userId: userInfo.user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        address,
        phone,
        pizzas: pizzas.map((pizza) => ({
          size: pizza.pizzaSize,
          flavours: pizza.pizzaFlavours,
          quantity: pizza.quantity
        }))

      })
    } catch (e) {
      console.log('Erro ao salvar pedido:', e)
    }

    setOrderInProgress(false)
  }

  function removePizzaFromOrder(id) {
    addPizza((prevState) => prevState.filter(item => item.id !== id))
  }

  function newPizza(pizza) {
    return { id: v4(), ...pizza }
  }

  return <OrderContext.Provider value={{
    order: {
      pizzas,
      address,
      phone
    },
    addPizzaToOrder,
    sendOrder,
    removePizzaFromOrder,
    addAddress,
    addPhone
  }}>
    {children}
  </OrderContext.Provider>
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }
