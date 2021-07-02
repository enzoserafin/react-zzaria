import styled from 'styled-components'
import { Toolbar as MaterialToolbar } from '@material-ui/core'
import { ReactComponent as MainLogo } from '../../assets/logo-react-zzaria.svg'

export const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  width: 100%;
`

export const LogoContainer = styled.div`
  flex-grow: 1;
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
