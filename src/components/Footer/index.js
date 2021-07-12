import { Link, withRouter } from 'react-router-dom'
import { FooterContent, OrderContainer, ButtonsContainer, Button } from './styles'
import { Container, Grid, Typography } from '@material-ui/core'
import useAuth from '../../hooks/auth'
import t from 'prop-types'
import singularOrPlural from '../../utils/singularOrPlural'

const Footer = ({ buttons, history, location }) => {
  const { userInfo } = useAuth()
  const { pizzaSize, pizzaFlavours } = location.state
  const { name, slices, flavours } = pizzaSize

  console.log('pizzaFlavours:', pizzaFlavours)

  return (
    <FooterContent>
      <Container>
        <Grid container>
          <OrderContainer>
            <Typography>
              <b>{userInfo.user.firstName}, se pedido é:</b>
            </Typography>
            <Typography>
              Pizza <b>{name.toUpperCase()}</b> - ({slices} fatias, {flavours} {`${singularOrPlural(flavours, 'sabor', 'sabores')}`})
            </Typography>

            {pizzaFlavours && (
              <Typography>
                {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
                <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
              </Typography>
            )}
          </OrderContainer>
          <ButtonsContainer>
            <Button
              {
              ...buttons.back}
              component='a'
              onClick={(e) => {
                e.preventDefault()
                history.goBack()
              }
              }
            />
            <Button
              {
              ...buttons.action}
              color='primary'
              component={Link}
            />
          </ButtonsContainer>
        </Grid>
      </Container>
    </FooterContent>
  )
}

Footer.propTypes = {
  buttons: t.object.isRequired,
  history: t.object.isRequired,
  location: t.object.isRequired
}

export default withRouter(Footer)
