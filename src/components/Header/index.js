import { Toolbar } from './styles'
import { Route, Switch } from 'react-router-dom'
import { AppBar } from '@material-ui/core'
import HeaderCommon from '../HeaderCommon'
import HeaderCheckout from '../HeaderCheckout'

import { CHECKOUT } from '../../routes'

const Header = () => (
  <AppBar>
    <Toolbar>
      <Switch>
        <Route path={CHECKOUT} component={HeaderCheckout} />
        <Route component={HeaderCommon} />
      </Switch>
    </Toolbar>
  </AppBar>
)

export default Header
