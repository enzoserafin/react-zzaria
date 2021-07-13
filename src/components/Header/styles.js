import styled from 'styled-components'
import { Toolbar as MaterialToolbar } from '@material-ui/core'

export const Toolbar = styled(MaterialToolbar)`
  && {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    width: 100%;
  }
`
