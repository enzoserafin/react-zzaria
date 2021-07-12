import t from 'prop-types'
import {
  Content,
  HeaderContent,
  Title,
  MainContent,
  Input
} from './styles'
import { Redirect } from 'react-router-dom'
import { HOME } from '../../routes'
import Footer from '../../components/Footer'

const ChoosePizzaQuantity = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
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
          <Input defaultValue='1' autoFocus />
        </MainContent>

      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores'
          },
          action: {
            to: '/',
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
