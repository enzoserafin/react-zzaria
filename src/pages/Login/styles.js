import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { ReactComponent as MainLogo } from '../../assets/logo-react-zzaria.svg'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export const Logo = styled(MainLogo)`
  width: 100%;
`

export const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    max-width: 480px;
    padding: ${({ theme }) => theme.spacing(2)}px;
    text-transform: none;
  }
`
