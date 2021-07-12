import { createContext } from 'react'
import t from 'prop-types'

const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  return <OrderContext.Provider value={{}}>
    {children}
  </OrderContext.Provider>
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }
