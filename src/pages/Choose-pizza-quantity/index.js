import { useState } from 'react'

import t from 'prop-types'
import {
  Content,
  HeaderContent,
  Title,
  MainContent,
  Input,
  Button
} from './styles'
import Footer from '../../components/Footer'
import { Redirect } from 'react-router-dom'
import { HOME, CHECKOUT } from '../../routes'
import useOrder from '../../hooks/order'

const ChoosePizzaQuantity = ({ location }) => {
  const [input, setInput] = useState(1)
  const { order, addPizzaToOrder } = useOrder()

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  console.log('order: ', order)

  function handleChange(e) {
    const { value } = e.target

    if (value >= 1) {
      setInput(value)
    }
  }

  function addPizza() {
    addPizzaToOrder({
      ...location.state,
      quantity: input
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <Title variant='h4' gutterBottom>
            Quantas pizzas você gostaria<br />
            de pedir com esses sabores?
          </Title>
        </HeaderContent>

        <MainContent>
          <Input value={input} onChange={handleChange} autoFocus />
          <Button to={HOME} onClick={addPizza}>Adicionar e <br />montar outra</Button>
        </MainContent>

      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores'
          },
          action: {
            to: CHECKOUT,
            onClick: addPizza,
            children: 'Finalizar compra'
          }
        }}
      />
    </>
  )
}

ChoosePizzaQuantity.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaQuantity
