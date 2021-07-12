import {
  Content,
  HeaderContent,
  Title,
  MainContent,
  Input
} from './styles'
import Footer from '../../components/Footer'

const ChoosePizzaQuantity = () => {
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

export default ChoosePizzaQuantity
