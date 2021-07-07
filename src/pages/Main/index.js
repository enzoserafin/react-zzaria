import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../components/Header'
import { Spacer } from './styles'
import { HOME, CHOOSE_PIZZA_FLAVOURS } from '../../routes'

const ChoosePizzaSize = React.lazy(() => import('../Choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('../Choose-pizza-flavours'))

const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

      <Suspense fallback='Loading...'>
        <Switch>
          <Route path={HOME} exact component={ChoosePizzaSize} />
          <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
        </Switch>
      </Suspense>

    </>
  )
}

export default Main
