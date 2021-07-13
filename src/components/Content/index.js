import { Main } from './styles'
import t from 'prop-types'

const Content = ({ children, ...props }) => (
  <Main {...props}>
    {children}
  </Main>
)

Content.propTypes = {
  children: t.node.isRequired
}

export default Content
