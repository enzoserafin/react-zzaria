import { Main } from './styles'
import { Container } from '@material-ui/core'
import t from 'prop-types'

const Content = ({ children, ...props }) => (
  <Main {...props}>
    <Container>
      {children}
    </Container>
  </Main>
)

Content.propTypes = {
  children: t.node.isRequired
}

export default Content
