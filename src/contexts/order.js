import { createContext, useState } from 'react'
import t from 'prop-types'
import { v4 } from 'uuid'

const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const [pizzas, addPizza] = useState([])
  const [orderInProgress, setOrderInProgress] = useState(false)

  function addPizzaToOrder(pizza) {
    if (orderInProgress) {
      return addPizza((pizzas) => pizzas.concat(newPizza(pizza)))
    }
    setOrderInProgress(true)
    addPizza([newPizza(pizza)])
  }

  function sendOrder() {
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
      pizzas
    },
    addPizzaToOrder,
    sendOrder,
    removePizzaFromOrder
  }}>
    {children}
  </OrderContext.Provider>
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }
