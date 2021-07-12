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
import { Redirect } from 'react-router-dom'
import { HOME, CHECKOUT } from '../../routes'
import Footer from '../../components/Footer'

const ChoosePizzaQuantity = ({ location }) => {
  const [input, setInput] = useState(1)

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange(e) {
    const { value } = e.target

    if (value >= 1) {
      setInput(value)
    }
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
          <Button>Adicionar e <br />montar outra</Button>
        </MainContent>

      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores'
          },
          action: {
            to: CHECKOUT,
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
