import { FooterContent } from './styles'
import Footer from '../Footer'
import t from 'prop-types'

const FooterCheckout = ({ children, justifyContent }) => {
  return (
    <Footer>
      <FooterContent justifyContent={justifyContent}>
        {children}
      </FooterContent>
    </Footer>
  )
}

FooterCheckout.propTypes = {
  children: t.node.isRequired,
  justifyContent: t.string
}

export default FooterCheckout
