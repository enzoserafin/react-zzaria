import { Redirect } from 'react-router-dom'
import { Content, Title } from './styles'
import { Grid } from '@material-ui/core'
import t from 'prop-types'

import singularOrPlural from '../../utils/singularOrPlural'
import { HOME } from '../../routes'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours } = location.state
  return (
    <>
      <Content>
        <Grid container direction='column' alignItems='center'>
          <Title variant='h4' gutterBottom>
            Escolha até {location.state.flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}:
          </Title>
        </Grid>
      </Content>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
