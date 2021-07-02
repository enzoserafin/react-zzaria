import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../components/Header'
import { Spacer } from './styles'

const ChoosePizzaSize = React.lazy(() => import('../Choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('../Choose-pizza-flavours'))

const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

      <Suspense fallback='Loading...'>
        <Switch>
          <Route path='/' exact component={ChoosePizzaSize} />
          <Route path='/sabores-da-pizza' component={ChoosePizzaFlavours} />
        </Switch>
      </Suspense>
    </>
  )
}

export default Main
