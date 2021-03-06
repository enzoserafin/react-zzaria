import { useState } from 'react'
import {
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { LogoContainer, LinkLogo, Logo } from './styles'
import useAuth from '../../hooks/auth'
import { HOME } from '../../routes'

const HeaderCommon = () => {
  const [toggleMenu, setToggleMenu] = useState(null)
  const { userInfo, logout } = useAuth()
  const handleOpenMenu = (e) => {
    setToggleMenu(e.target)
  }

  const handleClose = () => {
    setToggleMenu(null)
  }

  return (
    <>
      <LogoContainer>
        <LinkLogo to={HOME}>
          <Logo />
        </LinkLogo>
      </LogoContainer>

      <Typography color='inherit'>{`Olá ${userInfo.user.firstName}`}</Typography>
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
    </>
  )
}

export default HeaderCommon
