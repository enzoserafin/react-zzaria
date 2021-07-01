import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { ReactComponent as MainLogo } from '../../assets/logo-react-zzaria.svg'

export const Container = styled.div`
  padding: 20px;
`

export const Logo = styled(MainLogo)`
  width: 100%;
`

export const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    padding: 15px;
    text-transform: none;
  }
`
