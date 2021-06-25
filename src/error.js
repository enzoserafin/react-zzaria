import { PureComponent } from 'react'

class ErroBoundary extends PureComponent {
    state = { hasError: false }

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