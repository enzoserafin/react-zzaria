import { FooterContent } from './styles'
import { Container } from '@material-ui/core'
import t from 'prop-types'
import FooterOrderAndButtons from '../FooterOrderAndButtons'

const Footer = ({ children, ...props }) => (
  <FooterContent>
    <Container>
      {children || <FooterOrderAndButtons {...props} />}
    </Container>
  </FooterContent>
)

Footer.propTypes = {
  children: t.node
}

export default Footer
