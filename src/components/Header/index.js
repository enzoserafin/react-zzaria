import { useState, useContext } from 'react'
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { Toolbar, LogoContainer, Logo } from './styles'
import { AuthContext } from '../../contexts/auth'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  const handleOpenMenu = (e) => {
    setToggleMenu(e.target)
  }

  const handleClose = () => {
    setToggleMenu(null)
  }

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Typography color='inherit'>{`Olá ${userName}`}</Typography>
        <IconButton color='inherit' onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>
        {/* https://github.com/da2k/curso-reactjs-ninja/issues/522 */}
        <Menu
          open={!!toggleMenu}
          onClose={handleClose}
          anchorEl={toggleMenu}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
