import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../components/Header'
import { Spacer } from './styles'

const ChoosePizzaSize = React.lazy(() => import('../Choose-pizza-size'))

const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

      <Suspense fallback='Loading...'>
        <Switch>
          <Route path='/' exact component={ChoosePizzaSize} />
        </Switch>
      </Suspense>
    </>
  )
}

export default Main
