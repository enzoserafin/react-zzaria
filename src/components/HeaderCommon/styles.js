import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as MainLogo } from '../../assets/logo-react-zzaria.svg'

export const LogoContainer = styled.div`
  flex-grow: 1;
`

export const LinkLogo = styled(Link)`
  display: inline-block;
`

export const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`
