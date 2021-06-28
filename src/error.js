import { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ErroBoundary extends PureComponent {
  state = { hasError: false }

  static propTypes = {
    children: PropTypes.func.isRequired
  }

  static getDerivedStateFromError(error) {
    console.log('error getDerivedStateFromError:', error.message)
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log('Error:', error)
    console.log('Info:', info.componentStack)
  }

  render() {
    return this.props.children(this.state.hasError)
  }
}

export default ErroBoundary
