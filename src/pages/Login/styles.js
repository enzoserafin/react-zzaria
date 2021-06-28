import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

export const Container = styled.div`
  padding: 20px;
`

export const Logo = styled(MainLogo)`
  width: 100%;
`

export const GitHubButton = styled(Button)`
  && {
    font-size: 20px;
    padding: 15px;
    text-transform: none;
  }
`
