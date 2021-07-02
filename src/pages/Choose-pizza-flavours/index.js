import { Title } from './styles'
import t from 'prop-types'

const ChoosePizzaFlavours = ({ location }) => {
  console.log(location)
  return (
    < Title > Escolha o sabor da pizza</Title >
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
