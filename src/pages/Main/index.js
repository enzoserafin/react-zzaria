import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../components/Header'
import { Spacer } from './styles'
import * as routes from '../../routes'

const ChoosePizzaSize = React.lazy(() => import('../Choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('../Choose-pizza-flavours'))
const ChoosePizzaQuantity = React.lazy(() => import('../Choose-pizza-quantity'))

const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

      <Suspense fallback='Loading...'>
        <Switch>
          <Route path={routes.HOME} exact component={ChoosePizzaSize} />
          <Route path={routes.CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
          <Route path={routes.CHOOSE_PIZZA_QUANTITY} component={ChoosePizzaQuantity} />
        </Switch>
      </Suspense>
    </>
  )
}

export default Main
